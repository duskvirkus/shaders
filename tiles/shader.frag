#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vCoord;

void main() {

    vec2 coord = vec2(vCoord.x, vCoord.y);
    coord *= 10.0;
    coord = fract(coord); // comment out for interesting effect

    gl_FragColor = vec4(0.6, coord.y, coord.x, 1.0);

}

