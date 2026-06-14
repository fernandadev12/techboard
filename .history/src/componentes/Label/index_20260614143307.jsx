import "./labelstyles.css";

export function LabelFormulario({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>;
}
