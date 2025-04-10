
import { useState } from 'react';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const ProjectCard = ({ id, title, category, imageUrl, description }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-110 brightness-50' : ''}`}
        />
      </div>
      
      <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-black bg-opacity-70 p-6 rounded-lg transform transition-all duration-500">
          <span className="text-kalra-gold text-sm font-medium">{category}</span>
          <h3 className="text-white text-xl font-semibold mt-1">{title}</h3>
          <p className="text-gray-300 mt-2 line-clamp-2">{description}</p>
          <Link 
            to={`/projects/${id}`} 
            className="inline-flex items-center mt-4 text-kalra-gold hover:text-white transition-colors"
          >
            <Eye size={16} className="mr-2" />
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
