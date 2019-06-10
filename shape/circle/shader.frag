#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;

varying vec2 position;

float shapeCircle(vec2 position, float radius) {
    return step(radius, length(position - vec2(0.5)));
}

void main() {
    vec3 color = vec3(1.0 - shapeCircle(position, (sin(time) + 1.0) * 0.2));
    gl_FragColor = vec4(color, 1.0);
}

