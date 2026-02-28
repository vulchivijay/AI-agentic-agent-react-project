import React, { useState } from 'react';
import AgenticAgent from './../scripts/agenticAgent';
import { writeFile } from './../pages/fileUtils';

const agent = new AgenticAgent();

function App() {
  const [result, setResult] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [showGeneratedPage, setShowGeneratedPage] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      setResult('No file uploaded.');
      return;
    }
    const uiIntent = {
      intent: 'Create a user profile page',
      source: file.name,
      timestamp: new Date().toISOString()
    };
    const uiSpec = {
      components: ['Alert', 'Card', 'Form', 'Input', 'Button'],
      layout: 'vertical',
      fields: [
        { label: 'Name', type: 'text' },
        { label: 'Email', type: 'email' }
      ]
    };
    // Save to physical files in pages folder
    await writeFile('d:/Projects/AI-agentic-agent-react-project/pages/UI-intent.json', JSON.stringify(uiIntent, null, 2));
    await writeFile('d:/Projects/AI-agentic-agent-react-project/pages/UI-spec.json', JSON.stringify(uiSpec, null, 2));
    setResult('Analysis complete. UI-intent.json and UI-spec.json created in pages folder.');
  };

  const handleGenerate = async () => {
    // Read UI-intent.json and UI-spec.json from localStorage
    const uiIntent = localStorage.getItem('UI-intent.json');
    const uiSpec = localStorage.getItem('UI-spec.json');
    if (!uiIntent || !uiSpec) {
      setResult('UI-intent.json or UI-spec.json not found. Please analyze first.');
      return;
    }
    // Parse spec and generate code using existing components
    const spec = JSON.parse(uiSpec);
    let code = `import React from 'react';\n`;
    code += `import Alert from '../components/Alert';\nimport Card from '../components/Card';\nimport Form from '../components/Form';\nimport Input from '../components/Input';\nimport Button from '../components/Button';\n\n`;
    code += `const GeneratedPage = () => (\n  <div>\n    <Alert variant="success">User Profile Page</Alert>\n    <Card title="Profile Info">\n      <Form>\n        <Input type="text" placeholder="Name" />\n        <Input type="email" placeholder="Email" />\n        <Button variant="primary">Submit</Button>\n      </Form>\n    </Card>\n  </div>\n);\n\nexport default GeneratedPage;`;
    // Save generated code as a .tsx file in src/pages
    await writeFile('d:/Projects/AI-agentic-agent-react-project/src/pages/GeneratedPage.tsx', code);
    setResult('GeneratedPage.tsx created in src/pages.\n\n' + code);
    setShowGeneratedPage(true);
  };

  const handleReview = async () => {
    // Simulate using GitHub agent definition for code review
    const feedback = await agent.reviewCode('// code here');
    setResult(feedback);
  };

  const handleUnitTest = async () => {
    // Simulate using GitHub agent definition for unit testing
    const testResults = await agent.runUnitTests('// code here');
    setResult(testResults);
  };

  const handleSystemTest = async () => {
    // Simulate using GitHub agent definition for system testing
    const testResults = await agent.runSystemTests('// code here');
    setResult(testResults);
  };

  return (
    <div className="container-fluid min-vh-100 bg-gradient d-flex flex-column justify-content-center align-items-center" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #f8bbd0 100%)' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5 shadow w-100">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Agentic Agent</a>
        </div>
      </nav>
      <div className="d-flex flex-column align-items-center w-100 flex-grow-1">
        <div className="col-lg-7 col-md-9 mx-auto">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-white border-0 text-center py-4 rounded-top-4">
              <h2 className="mb-1 fw-bold text-primary">GitHub Agents Dashboard</h2>
              <p className="text-muted mb-0">Automate your workflow with design, code, and testing agents</p>
            </div>
            <div className="card-body p-4">
              <div className="mb-4">
                <label className="form-label fw-semibold">Upload Design Screenshot or Requirement Document</label>
                <input type="file" className="form-control form-control-lg" accept="image/*,.pdf,.doc,.docx,.txt" onChange={handleFileChange} />
              </div>
              <div className="row g-2 mb-4 text-center justify-content-center">
                <div className="col-6 col-md-4">
                  <button className="btn btn-primary w-100 py-2" onClick={handleAnalyze}>
                    <i className="bi bi-search me-2"></i>Analyze
                  </button>
                </div>
                <div className="col-6 col-md-4">
                  <button className="btn btn-success w-100 py-2" onClick={handleGenerate}>
                    <i className="bi bi-file-earmark-code me-2"></i>Generate Page
                  </button>
                </div>
                <div className="col-6 col-md-4">
                  <button className="btn btn-info w-100 py-2" onClick={handleUnitTest}>
                    <i className="bi bi-check2-square me-2"></i>Unit Test
                  </button>
                </div>
                <div className="col-6 col-md-4">
                  <button className="btn btn-warning w-100 py-2" onClick={handleSystemTest}>
                    <i className="bi bi-gear me-2"></i>System Test
                  </button>
                </div>
                <div className="col-6 col-md-4">
                  <button className="btn btn-secondary w-100 py-2" onClick={handleReview}>
                    <i className="bi bi-search-heart me-2"></i>Code Review
                  </button>
                </div>
              </div>
              <div className="bg-light p-4 rounded-3 border shadow-sm">
                <label className="form-label fw-semibold">Agent Output</label>
                <pre className="mb-0" style={{ minHeight: '120px', fontSize: '1rem' }}>{result}</pre>
              </div>
              {showGeneratedPage && (
                <div className="mt-4">
                  <h4 className="fw-bold text-success mb-3">Generated Page Preview</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-4 mt-5 text-muted small w-100">
        &copy; 2026 Agentic Agent | Powered by Bootstrap & GitHub Agents
      </footer>
    </div>
  );
}

export default App;
