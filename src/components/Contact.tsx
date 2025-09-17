import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      content: "Abel Castillo y Bolivia (Esquina)",
      subtitle: "Guayaquil, Ecuador",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      content: "098 409 4824",
      subtitle: "WhatsApp disponible",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horario",
      content: "Lunes a Domingo",
      subtitle: "7:00 AM - 9:00 PM",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Redes Sociales",
      content: "@verde.sabroso",
      subtitle: "Síguenos en redes",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contacto" ref={sectionRef} className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-green-600">Contáctanos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para servirte. ¡Ven a visitarnos o haz tu pedido!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-900 font-semibold mb-1">
                  {item.content}
                </p>
                <p className="text-gray-600 text-sm">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Map or Call to Action */}
        <div className={`transform transition-all duration-700 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Listo para disfrutar?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Haz tu pedido ahora y disfruta de nuestros deliciosos platos hechos con amor
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/59898409482?text=Hola! Quiero hacer un pedido de Verde Sabroso"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              
              <a
                href="tel:+59898409482"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Llamar
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                <span className="font-semibold">Verde Sabroso</span> - 
                El mejor sabor de Guayaquil en cada bocado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;