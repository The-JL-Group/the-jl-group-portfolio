// Variants
export const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

export const headerImg = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        // Brings the element to its original place
        y: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 1.6,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: 'easeInOut',
            duration: 0.8,
        },
    },
};