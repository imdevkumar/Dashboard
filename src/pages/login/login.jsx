import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/auth';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/selectbrand');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        const data = await loginUser(formData.email, formData.password);
        if (data && (data.success || data.token || data.user)) {
          localStorage.setItem('isLoggedIn', 'true');
          if (data.token) {
            localStorage.setItem('token', data.token);
            console.log('Login token:', data.token);
          }
          navigate('/selectbrand');
        } else {
          setErrors({ submit: data.message || 'Invalid email or password' });
        }
      } catch (error) {
        setErrors({ submit: 'Login failed. Please try again.' });
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      
      <div className="loginbg">
        <div className="login-container">
          <div className="login-logo p-3">
            <img src="/rbhilogo.png" alt="Logo" />
          </div>
          <div className="login-box">
            <h1>Login</h1>
            <div className="subtitle">
              More than 15,000+ recipes from around the world!
            </div>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <span className="input-icon">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className={errors.email ? 'error' : ''}
                  autoComplete="username"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="form-group">
                <span className="input-icon">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={errors.password ? 'error' : ''}
                  autoComplete="current-password"
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              <div className="login-options">
                <label>
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />
                  Remember me
                </label>
                <a href="/forgot-password" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
              {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}
              <button type="submit" className="login-button">
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login; 