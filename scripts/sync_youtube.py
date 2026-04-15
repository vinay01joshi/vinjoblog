import urllib.request
import xml.etree.ElementTree as ET
import yaml
import os
import re

# Configuration
CHANNEL_ID = "UCeCV8iy6ynAHbC3AcXBZICQ"
RSS_URL = f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}"
VIDEOS_FILE = "_data/videos.yml"
SHORTS_FILE = "_data/shorts.yml"

def fetch_rss(url):
    with urllib.request.urlopen(url) as response:
        return response.read()

def clean_text(text):
    if not text:
        return ""
    # Remove common redundant hashtags and noise
    patterns = [
        r'#shorts', r'#Shorts', r'#3DPrinting', r'#3dprinting', r'#3DPrint', r'#DIY',
        r'\bvideo\b', r'\bVideo\b', r'\bVIDEO\b',
        r'\(Shorts\)', r'\[Shorts\]', r'#maker', r'#Maker'
    ]
    cleaned = text
    for pattern in patterns:
        cleaned = re.sub(pattern, '', cleaned, flags=re.IGNORECASE)
    
    # Remove trailing/leading punctuation that might be left over
    cleaned = cleaned.strip('_- #|')
    
    # Clean up multiple spaces and strip
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    return cleaned

def parse_xml(xml_data):
    root = ET.fromstring(xml_data)
    namespace = {'atom': 'http://www.w3.org/2005/Atom', 
                 'yt': 'http://www.youtube.com/xml/schemas/2015',
                 'media': 'http://search.yahoo.com/mrss/'}
    
    entries = []
    for entry in root.findall('atom:entry', namespace):
        video_id = entry.find('yt:videoId', namespace).text
        title = entry.find('atom:title', namespace).text
        published = entry.find('atom:published', namespace).text
        link = entry.find('atom:link', namespace).attrib['href']
        
        media_group = entry.find('media:group', namespace)
        description = media_group.find('media:description', namespace).text if media_group is not None else ""
        
        # Check if it's a short
        is_short = "/shorts/" in link or "#shorts" in (description or "").lower() or "#Shorts" in title
        
        entries.append({
            'title': clean_text(title),
            'youtube_id': video_id,
            'date': published[:10], # YYYY-MM-DD
            'description': clean_text(description[:150]) + "..." if description and len(description) > 150 else clean_text(description),
            'is_short': is_short
        })
    return entries

def load_existing(filepath):
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            try:
                data = yaml.safe_load(f)
                return data if isinstance(data, list) else []
            except yaml.YAMLError:
                return []
    return []

def merge_data(existing, new_data):
    # Use youtube_id as unique key
    existing_ids = {item['youtube_id'] for item in existing}
    
    merged = list(existing)
    for item in new_data:
        if item['youtube_id'] not in existing_ids:
            # Add new fields for compatibility
            entry = {
                'title': item['title'],
                'youtube_id': item['youtube_id'],
                'date': item['date'],
                'description': item['description'],
                'category': 'DIY & Tech',
                'category_color': '#A020F0',
                'duration': "3 MIN READ"
            }
            merged.insert(0, entry) # Add to top
    return merged

def save_to_yaml(data, filepath):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        yaml.dump(data, f, allow_unicode=True, sort_keys=False)

def main():
    print(f"Fetching RSS feed from {RSS_URL}...")
    try:
        xml_data = fetch_rss(RSS_URL)
        new_entries = parse_xml(xml_data)
        
        new_videos = [e for e in new_entries if not e['is_short']]
        new_shorts = [e for e in new_entries if e['is_short']]
        
        print(f"Found {len(new_videos)} new videos and {len(new_shorts)} new shorts in feed.")
        
        # Merge Videos
        existing_videos = load_existing(VIDEOS_FILE)
        merged_videos = merge_data(existing_videos, new_videos)
        # Apply cleanup to all videos
        for v in merged_videos:
            v['title'] = clean_text(v.get('title', ''))
            v['description'] = clean_text(v.get('description', ''))
        save_to_yaml(merged_videos, VIDEOS_FILE)
        
        # Merge Shorts
        existing_shorts = load_existing(SHORTS_FILE)
        existing_short_ids = {s.get('youtube_id') for s in existing_shorts}
        merged_shorts = list(existing_shorts)
        for s in new_shorts:
            if s['youtube_id'] not in existing_short_ids:
                merged_shorts.insert(0, {
                    'title': s['title'],
                    'youtube_id': s['youtube_id'],
                    'date': s['date']
                })
        # Apply cleanup to all shorts
        for s in merged_shorts:
            s['title'] = clean_text(s.get('title', ''))
        save_to_yaml(merged_shorts, SHORTS_FILE)
        
        print(f"Successfully synced and cleaned. Total: {len(merged_videos)} videos, {len(merged_shorts)} shorts.")
        
    except Exception as e:
        print(f"Error during sync: {e}")

if __name__ == "__main__":
    main()
