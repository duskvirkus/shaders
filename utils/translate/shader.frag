#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;

varying vec2 position;

float shapeCircle(vec2 position, float radius) {
    return step(radius, length(position - vec2(0.5)));
}

vec2 translate(vec2 location, vec2 change) {
    location += change * 0.5;
    return location;
}

void main() {
    gl_FragColor = vec4(
        vec3(1.0 - shapeCircle(
            translate(
                position,
                vec2(sin(time) * 0.5, cos(time) * 0.5)
            ),
            0.2
        )),
        1.0
    );
}

