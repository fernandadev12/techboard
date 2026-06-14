import "./labelstyles.css";

export function LabelFormulario({ children, htmlFor }) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
