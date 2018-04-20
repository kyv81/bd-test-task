import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Image from 'components/Image';
import './GIF.css';
import { connect } from 'react-redux';
import { getImagesRequest } from 'actions/imageActions';

class GIF extends Component {
  static propTypes = {
    getImagesRequest: PropTypes.func.isRequired,
    img: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object,
  };

  componentDidMount() {
    this.props.getImagesRequest();
  }

  handleClickRefresh = () => {
    this.props.getImagesRequest();
  };

  render() {
    const { img, isLoading, error } = this.props;

    return (
      <div className="GIFViewer">
        <div className="GIFViewer__image">
          <Image img={img} isLoading={isLoading} error={error} />
        </div>
        <Button onClick={this.handleClickRefresh}>Refresh</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  img: state.image.img,
  isLoading: state.image.isLoading,
  error: state.image.error,
});

const mapDispatchToProps = { getImagesRequest };

export default connect(mapStateToProps, mapDispatchToProps)(GIF);
