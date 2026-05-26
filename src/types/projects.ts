export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string
  imageCaption: string;
  liveUrl: string;
  repoUrl: string;
  tags: string[];
}