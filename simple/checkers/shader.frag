#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
varying vec2 vPos;

void main() {

    vec2 pos = vPos;
    pos.x *= resolution.x / resolution.y;

    pos *= 100.0;
    float color = floor(pos.x) + floor(pos.y);

    color = mod(color, 2.0);

    gl_FragColor = vec4(color, color, color, 1.0);

}

