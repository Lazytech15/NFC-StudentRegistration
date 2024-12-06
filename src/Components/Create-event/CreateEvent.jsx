import { useState } from 'react';
import './CreateEvent.module.css';

function CreateEvent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    eventType: '',
    hasLimit: false,
    limit: '',
    campus: '',
    bannedIds: '',
    location: '',
    description: '',
    eventName: ''
  });

  const campusList = [
    'Main Campus',
    'North Campus',
    'South Campus',
    'East Campus',
    'West Campus',
    'All Campuses'
  ];

  const eventTypes = [
    'Event Attendance',
    'Membership',
    'Room Attendance',
    'Line Up Organizing'
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsDialogOpen(false);
      // Handle form submission here
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const steps = [
    {
      title: "Select Event Type",
      content: (
        <div className="form-group">
          <select 
            className="select"
            onChange={(e) => handleInputChange('eventType', e.target.value)}
            value={formData.eventType}
          >
            <option value="">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      )
    },
    {
      title: "Set Attendance Limit",
      content: (
        <div className="form-group">
          <div className="button-group">
            <button 
              className="button"
              onClick={() => handleInputChange('hasLimit', true)}
            >
              Has Limit
            </button>
            <button 
              className="button"
              onClick={() => handleInputChange('hasLimit', false)}
            >
              Limitless
            </button>
          </div>
          {formData.hasLimit && (
            <input 
              type="number" 
              className="input"
              placeholder="Enter limit"
              onChange={(e) => handleInputChange('limit', e.target.value)}
            />
          )}
        </div>
      )
    },
    {
      title: "Select Campus",
      content: (
        <div className="form-group">
          <select 
            className="select"
            onChange={(e) => handleInputChange('campus', e.target.value)}
            value={formData.campus}
          >
            <option value="">Select campus</option>
            {campusList.map((campus) => (
              <option key={campus} value={campus}>{campus}</option>
            ))}
          </select>
        </div>
      )
    },
    {
      title: "Banned IDs",
      content: (
        <div className="form-group">
          <p className="helper-text">Enter banned IDs separated by /</p>
          <input 
            className="input"
            placeholder="e.g. ID1/ID2/ID3"
            onChange={(e) => handleInputChange('bannedIds', e.target.value)}
            value={formData.bannedIds}
          />
        </div>
      )
    },
    {
      title: "Location",
      content: (
        <div className="form-group">
          <input 
            className="input"
            placeholder="Enter location"
            onChange={(e) => handleInputChange('location', e.target.value)}
            value={formData.location}
          />
        </div>
      )
    },
    {
      title: "Event Details",
      content: (
        <div className="form-group">
          <input 
            className="input"
            placeholder="Event Name"
            onChange={(e) => handleInputChange('eventName', e.target.value)}
            value={formData.eventName}
            style={{ marginBottom: '10px' }}
          />
          <input 
            className="input"
            placeholder="Description"
            onChange={(e) => handleInputChange('description', e.target.value)}
            value={formData.description}
          />
        </div>
      )
    }
  ];

  const Summary = () => (
    formData.eventName && (
      <div className="summary">
        <h2>{formData.eventName}</h2>
        <p><strong>Location:</strong> {formData.location}</p>
        <p><strong>Description:</strong> {formData.description}</p>
        <p><strong>Total Records:</strong> 0</p>
      </div>
    )
  );

  return (
    <div className="container">
      <Summary />
      
      <button 
        className="button"
        onClick={() => setIsDialogOpen(true)}
      >
        Create New Event
      </button>

      {isDialogOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3 className="modal-title">{steps[currentStep].title}</h3>
            </div>
            <div className="modal-content">
              {steps[currentStep].content}
            </div>
            <div className="modal-footer">
              <button 
                className="button secondary"
                onClick={() => currentStep === 0 ? setIsDialogOpen(false) : setCurrentStep(currentStep - 1)}
              >
                {currentStep === 0 ? 'Cancel' : 'Back'}
              </button>
              <button 
                className="button"
                onClick={handleNext}
              >
                {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="table-container">
        <p className="placeholder-text">Attendance data will appear here</p>
      </div>
    </div>
  );
}

export default CreateEvent;