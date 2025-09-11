import React from 'react';
import GradualBlur from './GradualBlur';
import GradualBlurAdvanced from './GradualBlurAdvanced';

const GradualBlurShowcase: React.FC = () => {
  return (
    <div className="space-y-12 py-8">
      {/* Original GradualBlur Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Original GradualBlur Component</h2>
        <div style={{position: 'relative', height: 400, overflow: 'hidden'}} className="border rounded-lg">
          <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Scrollable Content</h3>
              <p className="text-gray-600">
                This demonstrates the original GradualBlur component with basic blur functionality.
              </p>
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="bg-blue-50 p-4 rounded border">
                  <h4 className="font-medium">Content Block {i + 1}</h4>
                  <p className="text-sm text-gray-600">
                    Sample content to demonstrate the blur effect at the bottom of the container.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <GradualBlur
            target="parent"
            position="bottom"
            height="4rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
        </div>
      </section>

      {/* Advanced GradualBlur with Presets */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Advanced GradualBlur with Presets</h2>
        
        {/* Subtle Preset */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Subtle Preset</h3>
          <div style={{position: 'relative', height: 300, overflow: 'hidden'}} className="border rounded-lg">
            <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
              <div className="space-y-3">
                <p className="text-gray-600">This uses the 'subtle' preset with reduced intensity.</p>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="bg-green-50 p-3 rounded border">
                    <p className="text-sm">Subtle blur effect - Content {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
            <GradualBlurAdvanced preset="subtle" />
          </div>
        </div>

        {/* Intense Preset */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Intense Preset</h3>
          <div style={{position: 'relative', height: 300, overflow: 'hidden'}} className="border rounded-lg">
            <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
              <div className="space-y-3">
                <p className="text-gray-600">This uses the 'intense' preset with maximum blur strength.</p>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="bg-purple-50 p-3 rounded border">
                    <p className="text-sm">Intense blur effect - Content {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
            <GradualBlurAdvanced preset="intense" />
          </div>
        </div>

        {/* Smooth Preset with Animation */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Smooth Preset with Animation</h3>
          <div style={{position: 'relative', height: 300, overflow: 'hidden'}} className="border rounded-lg">
            <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
              <div className="space-y-3">
                <p className="text-gray-600">This uses the 'smooth' preset with animated transitions.</p>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="bg-orange-50 p-3 rounded border">
                    <p className="text-sm">Smooth animated blur - Content {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
            <GradualBlurAdvanced 
              preset="smooth" 
              animated={true}
              duration="0.5s"
              easing="ease-in-out"
            />
          </div>
        </div>

        {/* Custom Configuration */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Custom Configuration</h3>
          <div style={{position: 'relative', height: 300, overflow: 'hidden'}} className="border rounded-lg">
            <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
              <div className="space-y-3">
                <p className="text-gray-600">Custom configuration with hover effects and exponential curve.</p>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="bg-red-50 p-3 rounded border">
                    <p className="text-sm">Custom blur with hover - Content {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
            <GradualBlurAdvanced 
              position="bottom"
              height="8rem"
              strength={3}
              divCount={8}
              exponential={true}
              curve="ease-out"
              animated={true}
              hoverIntensity={1.5}
              opacity={0.9}
            />
          </div>
        </div>

        {/* Top Position Example */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Top Position Header Preset</h3>
          <div style={{position: 'relative', height: 300, overflow: 'hidden'}} className="border rounded-lg">
            <div style={{ height: '100%', overflowY: 'auto', padding: '2rem' }}>
              <div className="space-y-3">
                <p className="text-gray-600">Header preset with blur at the top of the container.</p>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="bg-indigo-50 p-3 rounded border">
                    <p className="text-sm">Top blur effect - Content {i + 1}</p>
                  </div>
                ))}
              </div>
            </div>
            <GradualBlurAdvanced preset="header" />
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Feature Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Original GradualBlur</h3>
            <ul className="space-y-2 text-sm">
              <li>✅ Basic blur effects</li>
              <li>✅ Position control (top, bottom, left, right)</li>
              <li>✅ Customizable strength and opacity</li>
              <li>✅ Simple curve options</li>
              <li>✅ Lightweight implementation</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Advanced GradualBlur</h3>
            <ul className="space-y-2 text-sm">
              <li>✅ All original features</li>
              <li>✅ Preset configurations</li>
              <li>✅ Mathematical precision with mathjs</li>
              <li>✅ Animation and transition support</li>
              <li>✅ Hover effects</li>
              <li>✅ Responsive design support</li>
              <li>✅ Intersection observer integration</li>
              <li>✅ Advanced curve functions</li>
              <li>✅ Page-level targeting</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GradualBlurShowcase;
