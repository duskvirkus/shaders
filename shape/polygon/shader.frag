#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.1415926535;

uniform float time;
uniform vec2 resolution;

varying vec2 position;

float shapePolygon(vec2 position, float radius, float sides, float rotation) {
    position = position * 2.0 - 1.0;
    float angle = atan(position.x, position.y) + rotation;
    float slice = 2.0 * PI / sides;
    return step(
        radius,
        cos(floor(0.5 + angle / slice) * slice - angle) * length(position)
    );
}

void main() {
    gl_FragColor = vec4(
        vec3(1.0 - shapePolygon(position, 0.4 * ((sin(time) + 1.0) * 0.5) + 0.2, 6.0, time)),
        1.0
    );
}

