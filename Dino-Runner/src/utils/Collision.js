// aabb collision detection
export function aabb({ rect1, rect2 }) {
    return (
        rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y
    );
}

export function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
