// @flow
// @jsx glam
import React from 'react';
import glam from 'glam';

import { Div, Img } from '../primitives';
import { type PropsWithStyles } from '../types';
import { className } from '../utils';
import { getSource } from './component-helpers';

type Props = PropsWithStyles & {
  data: Object,
  isFullscreen: boolean,
  isModal: boolean,
};

export const viewCSS = () => ({
  lineHeight: 0,
  position: 'relative',
  textAlign: 'center',
});

const View = (props: Props) => {
  const { data, formatters, getStyles, index, isFullscreen, isModal } = props;
  const innerProps = {
    alt: formatters.getAltText({ data, index }),
    src: getSource({ data, isFullscreen }),
  };

  return (
    <Div
      css={getStyles('view', props)}
      className={className('view', { isFullscreen, isModal })}
    >
      {
        data.type === 'img'
          ? <Img
            {...innerProps}
            className={className('view-image', { isFullscreen, isModal })}
            css={{
              height: 'auto',
              maxHeight: '90vh',
              maxWidth: '75vw',
              userSelect: 'none',
            }}
          />
          : <video
            controls
            className={className('view-image', { isFullscreen, isModal })}
            style={{
              height: 'auto',
              maxHeight: '90vh',
              maxWidth: '75vw',
              userSelect: 'none',
            }}
          >
            <source src={data.src} type="video/mp4" />

          </video>
      }
    </Div>
  );
};

export default View;