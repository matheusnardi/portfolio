import "./index.scss";

const Container = ({ children, custom }) => {
  return (
    <>
      <div className={`main-container ${custom}`}>{children}</div>
    </>
  );
};

export default Container;
