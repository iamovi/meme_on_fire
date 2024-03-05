async function updateText(position) {
    const text = document.querySelector(`.${position}-text`);
    const memeText = document.getElementById('memeImage');
    memeText.setAttribute(`data-${position}`, text.innerText);
}

async function generateMeme() {
    const memeImage = document.getElementById('memeImage');
    const topText = memeImage.getAttribute('data-top') || '';
    const bottomText = memeImage.getAttribute('data-bottom') || '';

    try {
        // Fetch meme template from the Imgflip API
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        const memes = data.data.memes;

        // Randomly select a meme template
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];

        // Set the meme template as the image source
        memeImage.src = randomMeme.url;

        // Update text on the meme
        document.querySelector('.top-text').innerText = topText;
        document.querySelector('.bottom-text').innerText = bottomText;
    } catch (error) {
        console.error('Error fetching meme template:', error);
    }
}
