import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

import {
  Heading,
  CloudinaryImage,
  CloudinaryImageProgressive,
  LayoutBase,
  Overlay,
  PageMeta,
  Spinner,
} from '@components';

const Container = styled.div`
  --photo-gutter: 1.5rem;
  padding: 3rem var(--photo-gutter) var(--photo-gutter);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Image = styled(CloudinaryImage)`
  width: 100%;
`;

const ImageProgressive = styled(CloudinaryImageProgressive)`
  width: 100%;
`;

const PhotoGridItem = styled.div`
  display: block;
  margin: 0;
  padding-bottom: 75%;
  position: relative;
  overflow: hidden;
`;

const PhotoButton = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  border: 0;
  display: block;
  margin: 0;
  padding: 0;
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  :hover::after {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Photo = ({ onClick, ...props }) => (
  <PhotoGridItem>
    <PhotoButton onClick={onClick}>
      <ImageProgressive {...props} options={{ w: 400 }} />
    </PhotoButton>
  </PhotoGridItem>
);

const PhotoGrid = styled.div`
  display: grid;
  justify-content: center;
  gap: var(--photo-gutter);
  grid-template-columns: repeat(auto-fill, minmax(300px, 400px));
  grid-auto-rows: 1fr;
  align-items: start;
  max-width: calc(1200px + var(--photo-gutter) * 2);
  margin: 0 auto;
`;

const PhotoViewerImage = styled(Image)`
  position: absolute;
  height: 100%;
  object-fit: contain;
`;

const PhotoViewerSpinner = styled(Spinner)`
  position: absolute;
  margin: auto;
  width: 10vw;
  color: var(--color-accent);
`;

const PhotoViewer = ({ id, onClose, onNext, onPrev }) => {
  const ref = useRef();
  const [loaded, setLoaded] = useState(false);
  const handleKeyUp = useCallback(
    (e) => {
      switch (e.key) {
        case 'Escape': {
          onClose();
          break;
        }
        case 'ArrowLeft': {
          onPrev();
          break;
        }
        case 'ArrowRight': {
          onNext();
          break;
        }
      }
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    ref.current.focus();
  }, []);

  useEffect(() => {
    setLoaded(false);
  }, [id]);

  return (
    <Overlay onClick={onClose} onKeyUp={handleKeyUp} ref={ref} tabIndex={0}>
      <PhotoViewerImage
        id={id}
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0 }}
      />
      {!loaded && <PhotoViewerSpinner />}
    </Overlay>
  );
};

const photos = [
  'IMG_20160108_195608_fipjav',
  'IMG_20171008_143907_ppnjwj',
  'IMG_20161021_165411_bq5r7y',
  'IMG_20161028_155531_aqwv32',
  'IMG_20160908_182514_zhnxh6',
  'dHJhdmVsL3JleWtqYXZpay0x',
  'IMG_20160704_190132_tlascj',
  'MVIMG_20171024_000337_dtgayl',
  'MVIMG_20171028_083314_zrr8cx',
  'MVIMG_20171016_083152_prqgfr',
  'IMG_20171003_163047_adco0g',
  'IMG_20171005_151846_cpgmqz',
  'IMG_20171008_105234_v0i9mh',
  'IMG_20171004_155743_yqupm2',
  'IMG_20171003_124444_vo5inw',
  'mturco.com/MVIMG_20190324_161915_uoh2dt',
  'IMG_20171003_124647_qzm57p',
  'IMG_20171003_114524_tbnywn',
  'IMG_20171003_105957_qagfbd',
  'IMG_20161105_162636_lipgfg',
  'IMG_20160707_120013_sbmear',
];

export default function PhotographyPage() {
  const [selected, setSelected] = useState(null);

  const handleNext = useCallback(() => {
    const current = photos.findIndex((photo) => photo === selected);
    setSelected(photos[Math.min(current + 1, photos.length - 1)]);
  }, [selected]);

  const handlePrev = useCallback(() => {
    const current = photos.findIndex((photo) => photo === selected);
    setSelected(photos[Math.max(current - 1, 0)]);
  }, [selected]);

  return (
    <LayoutBase>
      <Container>
        <PageMeta title="Photography" />

        <Header>
          <Heading>Matt Turco</Heading>
        </Header>
        <PhotoGrid>
          {photos.map((id) => (
            <Photo key={id} id={id} onClick={() => setSelected(id)} />
          ))}
        </PhotoGrid>

        {selected && (
          <PhotoViewer
            id={selected}
            onClose={() => setSelected(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </Container>
    </LayoutBase>
  );
}
