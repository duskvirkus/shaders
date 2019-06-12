#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;

varying vec2 vPos;

vec2 rippleish(vec2 location) {
    float angle = atan(location.x, location.y);
    float dist = location.y + location.y + sin(time * 0.1);
    return vec2(cos(angle) * dist, sin(angle) * dist);
}

void main() {

    vec2 pos = vPos;
    pos.x *= resolution.x / resolution.y;

    pos = pos - vec2(0.5);

    pos = rippleish(pos);
    pos *= 8.0;

    pos = vec2(floor(pos.x), floor(pos.y));

    float color = pos.x + pos.y;

    //color = mod(color, 2.0);

    gl_FragColor = vec4(color, color, color, 1.0);

}

