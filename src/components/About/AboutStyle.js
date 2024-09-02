import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.background_primary};
  color: ${({ theme }) => theme.text_primary};
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

export const AboutText = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
