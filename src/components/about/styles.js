import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ isMobile, isTablet }) => (isMobile || isTablet ? 'column' : 'row')};
  align-items: center;
  padding: 1.25rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  height: ${({ isMobile, isTablet }) => (isMobile || isTablet ? 'auto' : '100vh')};
  gap: 2rem;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: ${({ isMobile, isTablet }) => (isMobile || isTablet ? 'auto' : '100%')};
  min-width: 300px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 1.25rem;
  min-width: 300px;
`;

export const CardBg = styled.div`
  background-color: #414128;
  position: absolute;
  width: 60%;
  height: 70vh;
  top: 50px;
  right: 220px;
  border-radius: 1.875rem;
`;

export const Card = styled.div`
  width: ${({ isMobile, isTablet }) => (isMobile || isTablet ? '100%' : '60%')};
  height: ${({ isMobile, isTablet }) => (isMobile || isTablet ? '35vh' : '70vh')};
  border-radius: 1.875rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ isAlt }) => (isAlt ? '0% 0%' : 'center')};
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.625rem;
`;

export const Description = styled.p`
  padding-top: 0.625rem;
  font-weight: 300;
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const SectionTitle = styled.h3`
  margin-top: 2rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
`;

export const SkillHeading = styled.p`
  font-weight: 600;
  color: #5c2d91;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SkillIcon = {
  fontSize: '1.125rem'
};

export const SkillList = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem;
  margin-top: 0.625rem;
  font-size: 0.875rem;
`;

export const ToggleButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.625rem 1.25rem;
  background-color: #7e22ce;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6b21a8;
  }
`;
