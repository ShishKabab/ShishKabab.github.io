import React from "react";
import styled from "styled-components";
import LoadingIndicator from "./loading-indicator";
import PlayButton from "./play-button";

export interface AnimationFramesProps {
  width: number;
  height: number;
  frames: string[];
  playSpeed?: number;
  loopPause?: number;
}

export interface AnimationFramesState {
  currentFrame: number;
  playing: boolean;
  loaded: boolean;
}

const StyledContainer = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  cursor: pointer;
`;

const PlaybackControls = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DEFAULT_PLAY_SPEED = 1000;
const DEFAULT_LOOP_PAUSE = 2000;

async function preloadImage(src: string) {
  return new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => {
      resolve();
    });
    img.addEventListener("error", (err) => {
      reject(err);
    });
    img.src = src;
  });
}

async function preloadImages(srcs: string[]) {
  return Promise.all(srcs.map(preloadImage));
}

export default class AnimationFrames extends React.Component<
  AnimationFramesProps,
  AnimationFramesState
> {
  mounted = false;
  frameImages?: HTMLImageElement;
  doFrameTimeout?: ReturnType<typeof setTimeout>;

  constructor(props: AnimationFramesProps) {
    super(props);

    this.state = {
      currentFrame: 0,
      playing: false,
      loaded: false,
    };
  }

  async componentDidMount() {
    const { props } = this;
    this.mounted = true;
    await preloadImages(props.frames.slice(0, 1))
      .then(() => preloadImages(props.frames.slice(1)))
      .then(() => {});
    this.setState({
      loaded: true,
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  togglePlay() {
    if (!this.state.playing) {
      this.startPlay();
    } else {
      this.pausePlay();
    }
  }

  startPlay() {
    this.setState(
      {
        playing: true,
      },
      this.doFrame
    );
  }

  pausePlay() {
    if (this.doFrameTimeout) {
      clearTimeout(this.doFrameTimeout);
    }
    this.setState({
      playing: false,
    });
  }

  doFrame = () => {
    if (!this.mounted || !this.state.playing) {
      return;
    }

    const nextFrame = this.state.loaded
      ? (this.state.currentFrame + 1) % this.props.frames.length
      : this.state.currentFrame;
    this.setState({ currentFrame: nextFrame });
    const timeoutMs =
      nextFrame < this.props.frames.length - 1
        ? this.props.playSpeed ?? DEFAULT_PLAY_SPEED
        : this.props.loopPause ?? DEFAULT_LOOP_PAUSE;

    this.doFrameTimeout = setTimeout(this.doFrame, timeoutMs);
  };

  render() {
    const { props, state } = this;
    const onClick = state.loaded ? () => this.togglePlay() : () => {};

    return (
      <StyledContainer>
        <StyledImage
          src={props.frames[state.currentFrame]}
          width={props.width}
          height={props.height}
          onClick={onClick}
        />
        <PlaybackControls>
          {!state.loaded && <LoadingIndicator color="black" />}
          {state.loaded && !this.state.playing && (
            <PlayButton color="black" onClick={onClick} />
          )}
        </PlaybackControls>
      </StyledContainer>
    );
  }
}
