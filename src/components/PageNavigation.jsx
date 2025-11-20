import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './PageNavigation.css';

const PageNavigation = ({ prevPage, nextPage }) => {
  if (!prevPage && !nextPage) return null;

  return (
    <nav className="page-navigation">
      <div className="nav-buttons">
        {prevPage ? (
          <Link to={prevPage.path} className="nav-button prev">
            <ChevronLeft size={20} />
            <div className="nav-content">
              <span className="nav-direction">Previous</span>
              <span className="nav-title">{prevPage.label}</span>
            </div>
          </Link>
        ) : (
          <div className="nav-button-placeholder" />
        )}

        {nextPage ? (
          <Link to={nextPage.path} className="nav-button next">
            <div className="nav-content">
              <span className="nav-direction">Next</span>
              <span className="nav-title">{nextPage.label}</span>
            </div>
            <ChevronRight size={20} />
          </Link>
        ) : (
          <div className="nav-button-placeholder" />
        )}
      </div>
    </nav>
  );
};

export default PageNavigation;
