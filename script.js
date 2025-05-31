document.addEventListener('DOMContentLoaded', function() {
    // 音频播放控制
    const audioPlayer = document.getElementById('memorial-audio');
    const playButtons = document.querySelectorAll('.play-btn');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            audioPlayer.src = this.dataset.src;
            audioPlayer.play();
        });
    });

    // Lightbox配置
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': "图片 %1 / %2"
    });
});
