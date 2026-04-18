document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('div.highlight, pre.highlight');

    codeBlocks.forEach((block) => {
        // Create the copy button
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy';

        // Position adjustment for the block if needed
        if (getComputedStyle(block).position === 'static') {
            block.style.position = 'relative';
        }

        block.appendChild(button);

        button.addEventListener('click', () => {
            const code = block.querySelector('code')?.innerText || block.innerText;
            
            // Immediate feedback
            button.innerText = 'Copied!';
            button.classList.add('copied');

            navigator.clipboard.writeText(code).then(() => {
                setTimeout(() => {
                    button.innerText = 'Copy';
                    button.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                // Still reset after 2s even on failure
                setTimeout(() => {
                    button.innerText = 'Copy';
                    button.classList.remove('copied');
                }, 2000);
            });
        });
    });
});
