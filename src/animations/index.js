export const animationOne = {
    in: {
        scale: 1,
        opacity: 1
    },
    out: {
        scale: 0.8,
        opacity: 0
    }
};

export const animationTwo = {
    in: {
        scale: 1,
        y: 0,
        opacity: 1,
    },
    out: {
        scale: 0.8,
        opacity: 0,
        y: '-100vw',

    }
}

export const animationThree = {
    in: {
        scale: 0.8,
        y: -300,
        opacity: 1,
    },
    out: {
        scale: 1,
        y: 300,
        opacity: 0,
    },
    end: {
        y: 0,
        opacity: 1
    }
}

export const transition = {
    duration: 0.4
}