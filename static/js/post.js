document.addEventListener("DOMContentLoaded", () => {
    let progressElem = document.querySelector('.progress__circle'),
        progressPath = document.querySelector('.progress path'),
        pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
    'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
    'stroke-dashoffset 300ms linear, fill 300ms linear';

    let updateProgress = function () {
        let scroll = window.pageYOffset | document.body.scrollTop,
            height = document.body.clientHeight - window.innerHeight,
            progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
        console.log(progress);
        if(progress == 0) {
            console.log('done');
            progressElem.classList.add('complete');
        } else {
            progressElem.classList.remove('complete');
        }
    }

    updateProgress();
    window.addEventListener('scroll', function() {
        updateProgress();
    });
});