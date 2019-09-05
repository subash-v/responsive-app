import React from "react";
import PropTypes from "prop-types";
import styles from "./Icon.module.css";


export default class Icon extends React.Component {
  handleClick() {
    if (this.props.selectItem) {
      this.props.selectItem();
    }
  }
  render() {
    return (
      <div
        className={styles.base}
        style={{ width: this.props.size, height: this.props.size }}
        onClick={() => {
          this.handleClick();
        }}
      >
        <div
          id={this.props.id}
          className={styles.image}
          style={{
            backgroundImage: `url(${this.props.image})`,
            backgroundSize: `${this.props.backgroundSize}`
          }}
        />
      </div>
    );
  }
}

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  backgroundSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string.isRequired,
  id: PropTypes.string
};

Icon.defaultProps = {
  size: 30,
  backgroundSize: "contain"
};
