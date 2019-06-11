#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.1415926535;

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

vec2 rotate(vec2 location, float angle) {
    location -= vec2(0.5);
    location = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * location;
    location += vec2(0.5);
    return location;
}

void main() {
    gl_FragColor = vec4(
        vec3(shapeRectangle(
            rotate(
                position,
                sin(time) * PI
            ),
            vec2(0.3, 0.3)
        )),
        1.0
    );
}

