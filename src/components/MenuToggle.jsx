export const MenuToggle = ({ handleCheck }) => {
  return (
    <div className="hidden absolute">
      <input type="checkbox" id="hamb" onChange={handleCheck} />
    </div>
  );
};
