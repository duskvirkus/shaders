#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;

varying vec2 position;

float shapeRectangle(vec2 position, vec2 scale) {
    scale = vec2(0.5) - scale * 0.5;
    vec2 rect = vec2(
        step(scale.x, position.x) * step(scale.x, 1.0 - position.x),
        step(scale.y, position.y) * step(scale.y, 1.0 - position.y)
    );
    return rect.x * rect.y;
}

float mappedSin(float value) {
    return (sin(value) + 1.0) * 0.25;
}

float mappedCos(float value) {
    return (cos(value) + 1.0) * 0.25;
}

void main() {
    vec3 color = vec3(shapeRectangle(position, vec2(mappedSin(time + 0.2) + 0.3, mappedCos(time) + 0.3)));
    gl_FragColor = vec4(color, 1.0);
}

