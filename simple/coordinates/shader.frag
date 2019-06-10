#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vCoord;

void main() {
    gl_FragColor = vec4(vCoord.y, 0.5, vCoord.x, 1.0);
}

