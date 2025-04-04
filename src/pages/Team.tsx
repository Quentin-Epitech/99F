import React from 'react';
import { Mail, Phone, Award } from 'lucide-react';

const teamMembers = [
  {
    id: 5,
    name: "Hamza Sayadi",
    role: "Directeur Commercial",
    image: "https://media.discordapp.net/attachments/1313426407929675858/1357262640937697310/IMG_7073.jpg?ex=67ef90d6&is=67ee3f56&hm=d9cacb52a314386066ae984cddfafe80d01a44da1a29f2c7f2cffaf5708fd9b4&=&format=webp&width=1272&height=1696",
    email: "h.sayadi@driveselect.fr",
    phone: "+33 7 23 45 67 89",
    expertise: ["Mercedes-Benz", "Porsche", "Audi"],
    description: "Passionné par l'automobile de luxe depuis toujours, je mets mon expertise au service de nos clients pour les accompagner dans leur projet d'acquisition.",
    experience: "3 ans"
  },
  {
    id: 1,
    name: "Quentin Bonnet",  
    role: "Conseiller Commercial",
    image: "https://cdn.discordapp.com/attachments/1306599830033928293/1357264155215925360/Capture_decran_2025-04-03_a_09.49.14.png?ex=67f0e3bf&is=67ef923f&hm=2c09cfda15caeccd9356454658a40ae352ecb0fa4734a986ad2bdc56a6f61c3d&",
    email: "q.bonnet@driveselect.fr",
    phone: "+33 7 23 45 67 88",
    expertise: ["Mercedes-Benz", "Audi"],
    description: "Passionné par l'automobile de luxe depuis toujours, je mets mon expertise au service de nos clients pour les accompagner dans leur projet d'acquisition.",
    experience: "5 ans"
  },
  {
    id: 2,
    name: "Florian Chicheportiche",
    role: "CEO",
    image: "https://media.discordapp.net/attachments/1306599830033928293/1357320463608578079/Capture_decran_2025-04-03_a_13.46.51.png?ex=67efc6b0&is=67ee7530&hm=3532204535dc60b5d2ed1e8755dca757d4326e2e5ad9c1c0c20509cc8f652efe&=&format=webp&quality=lossless&width=1164&height=1552",
    email: "f.chicheportiche@driveselect.fr",
    phone: "+33 1 23 45 67 90",
    expertise: ["Mercedes-Benz", "Porsche", "BMW", "Audi"],
    description: "Spécialisée dans les nouvelles technologies automobiles, j'accompagne nos clients vers une mobilité plus responsable sans compromis sur le luxe.",
    experience: "10 ans"
  },
  {
    id: 3,
    name: "Alexandre Grosse",
    role: "Stagiaire sans renouvelement de contrat",
    image: "https://media.discordapp.net/attachments/1306599830033928293/1357314800102674503/IMG_0841.jpg?ex=67efc16a&is=67ee6fea&hm=40b7d481967eed8b97e3ccf8ed4f05da794e602a5de91c9c75245761ae0f6ee7&=&format=webp&width=1008&height=1344",
    email: "a.grosse@driveselect.fr",
    phone: "+33 1 23 45 67 91",
    expertise: ["Tesla", "BMW", "Lexus"],
    description: "Ancien pilote amateur, je partage ma passion pour les voitures sportives et aide nos clients à trouver lxe véhicule qui correspond à leurs attentes.",
    experience: "10 ans"
  },
  {
    id: 4,
    name: "Arthur Champagne-Fortere",
    role: "Responsable Financement",
    image: "https://media.discordapp.net/attachments/1306599830033928293/1357314802766188656/IMG_0839.jpg?ex=67f06a2a&is=67ef18aa&hm=f83b7ba0490d19a8e60e12410f508c5c13ffed0c621a67efeecd8078362ab24e&=&format=webp&width=1008&height=1344",
    email: "a.champagne-fortere@driveselect.fr",
    phone: "+33 1 23 45 67 92",
    expertise: ["Crédit", "Leasing", "LOA"],
    description: "Experte en solutions financières, je trouve les meilleures options de financement adaptées à chaque projet d'acquisition.",
    experience: "4 ans"
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 pt-32 pb-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center bg-fixed"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 text-transparent bg-clip-text">
            Notre Équipe
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Une équipe de passionnés à votre service pour vous accompagner dans toutes les étapes de votre projet automobile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="relative p-6 text-white">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-blue-300">{member.role}</p>
                  </div>

                  <div className="flex items-center text-sm">
                    <Award className="w-4 h-4 mr-1 text-blue-400" />
                    <span>{member.experience}</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Mail className="w-4 h-4 mr-2 text-blue-400" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 mr-2 text-blue-400" />
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-500/30 rounded-full text-xs backdrop-blur-sm border border-blue-400/20"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-blue-100">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;