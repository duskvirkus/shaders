#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vPos;

void main() {

    vec3 c1 = vec3(0.0, 0.0, 0.1);
    vec3 c2 = vec3(0.9, 0.3, 0.2);

    vec3 gradient = mix(c1, c2, vPos.x);

    gl_FragColor = vec4(gradient, 1.0);

}
