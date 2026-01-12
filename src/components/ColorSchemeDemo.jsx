const colorSchemes = [
  {
    id: 1,
    name: 'Ocean Blue',
    description: 'Professional & Trustworthy',
    colors: {
      primary: '#0EA5E9',
      secondary: '#0284C7',
      accent: '#06B6D4',
      bgDark: '#0F172A',
      textLight: '#E0F2FE',
      gradient: 'from-blue-500 to-cyan-500'
    }
  },
  {
    id: 2,
    name: 'Sunset Orange',
    description: 'Creative & Energetic',
    colors: {
      primary: '#F97316',
      secondary: '#EA580C',
      accent: '#FB923C',
      bgDark: '#1C1917',
      textLight: '#FED7AA',
      gradient: 'from-orange-500 to-amber-500'
    }
  },
  {
    id: 3,
    name: 'Forest Green',
    description: 'Growth & Innovation',
    colors: {
      primary: '#10B981',
      secondary: '#059669',
      accent: '#34D399',
      bgDark: '#064E3B',
      textLight: '#D1FAE5',
      gradient: 'from-emerald-500 to-teal-500'
    }
  },
  {
    id: 4,
    name: 'Purple Tech',
    description: 'Modern & Creative',
    colors: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#A78BFA',
      bgDark: '#1E1B4B',
      textLight: '#EDE9FE',
      gradient: 'from-violet-500 to-purple-500'
    }
  },
  {
    id: 5,
    name: 'Rose Gold',
    description: 'Elegant & Sophisticated',
    colors: {
      primary: '#F43F5E',
      secondary: '#E11D48',
      accent: '#FB7185',
      bgDark: '#18181B',
      textLight: '#FFE4E6',
      gradient: 'from-rose-500 to-pink-500'
    }
  }
]

export default function ColorSchemeDemo() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Color Scheme
          </h1>
          <p className="text-lg text-gray-600">
            Preview each theme to see which one represents you best
          </p>
        </div>

        <div className="space-y-12">
          {colorSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {scheme.id}. {scheme.name}
                    </h2>
                    <p className="text-gray-600 mt-1">{scheme.description}</p>
                  </div>
                  {/* Color Palette */}
                  <div className="flex gap-2">
                    <div
                      className="w-12 h-12 rounded-lg shadow-md"
                      style={{ backgroundColor: scheme.colors.primary }}
                      title="Primary"
                    />
                    <div
                      className="w-12 h-12 rounded-lg shadow-md"
                      style={{ backgroundColor: scheme.colors.secondary }}
                      title="Secondary"
                    />
                    <div
                      className="w-12 h-12 rounded-lg shadow-md"
                      style={{ backgroundColor: scheme.colors.accent }}
                      title="Accent"
                    />
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div
                className="p-8"
                style={{ backgroundColor: scheme.colors.bgDark }}
              >
                <div className="max-w-4xl mx-auto">
                  {/* Hero Preview */}
                  <div className="text-center mb-8">
                    <div className="mb-4">
                      <span
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: `${scheme.colors.primary}20`,
                          color: scheme.colors.accent
                        }}
                      >
                        Welcome to my portfolio
                      </span>
                    </div>
                    <h3
                      className="text-4xl font-bold mb-4"
                      style={{ color: scheme.colors.textLight }}
                    >
                      Building Amazing Experiences
                    </h3>
                    <p
                      className="text-lg mb-6"
                      style={{ color: `${scheme.colors.textLight}CC` }}
                    >
                      Full-stack developer passionate about creating beautiful and functional web applications
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button
                        className="px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:opacity-90 transition"
                        style={{ backgroundColor: scheme.colors.primary }}
                      >
                        View Projects
                      </button>
                      <button
                        className="px-6 py-3 rounded-lg font-semibold border-2 hover:opacity-80 transition"
                        style={{
                          color: scheme.colors.textLight,
                          borderColor: scheme.colors.accent
                        }}
                      >
                        Contact Me
                      </button>
                    </div>
                  </div>

                  {/* Gradient Preview */}
                  <div className="mt-8 relative h-32 rounded-xl overflow-hidden opacity-30">
                    <div className={`absolute inset-0 bg-gradient-to-r ${scheme.colors.gradient} blur-3xl`} />
                  </div>

                  {/* Feature Cards Preview */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    {['Skills', 'Projects', 'Experience'].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg"
                        style={{
                          backgroundColor: `${scheme.colors.primary}10`,
                          borderLeft: `4px solid ${scheme.colors.accent}`
                        }}
                      >
                        <h4
                          className="font-semibold mb-2"
                          style={{ color: scheme.colors.textLight }}
                        >
                          {item}
                        </h4>
                        <p
                          className="text-sm"
                          style={{ color: `${scheme.colors.textLight}99` }}
                        >
                          Lorem ipsum dolor sit amet
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Once you've chosen, I'll apply the color scheme to your entire portfolio!
          </p>
        </div>
      </div>
    </div>
  )
}
