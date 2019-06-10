#ifdef GL_ES
precision mediump float;
#endif

vec4 add(vec4 a, vec4 b) {
  vec4 sum;
  sum = a + b;
  return sum;
}

void main() {
    vec4 c1 = vec4(0.1, 0.6, 0.9, 0.5);
    vec4 c2 = vec4(0.2, 0.3, 0.0, 0.5);
    gl_FragColor = add(c1, c2);
}

