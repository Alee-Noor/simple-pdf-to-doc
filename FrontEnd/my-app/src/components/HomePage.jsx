import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page home-page">
      <h1>Transform Your Documents with <span className="text-gradient">Precision</span></h1>
      <p>Convert your PDF files into perfectly formatted Word documents while preserving layout and formatting.</p>
      <button className="primary-button" onClick={() => navigate('/convert')}>
        Start Converting Now
      </button>

      <div className="features-grid">
        <div className="feature-card">
          <h3>⚡ Instant Conversion</h3>
          <p>Get your documents converted in seconds with our lightning-fast processing engine.</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure Processing</h3>
          <p>Your files are protected with enterprise-grade security and automatic deletion.</p>
        </div>
        <div className="feature-card">
          <h3>🎯 Perfect Formatting</h3>
          <p>Maintain original layouts, fonts, and images with our advanced conversion algorithm.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
