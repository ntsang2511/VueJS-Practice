import { defineStore } from 'pinia';

export const useContentStore = defineStore('content', {
  state: () => ({
    services: [],
    strategy: [],
    whyChooseUs: [],
    facts: [],
    team: [],
    projects: [],
    testimonials: [],
    faqs: [],
  }),
  actions: {
    async fetchServices() {
      try {
        this.services = [
          { id: 1, title: 'Web Design', description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.', image: '../../assets/images/illustrations/i24.png' },
          { id: 2, title: 'Graphic Design', description: 'Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.', image: '../../assets/images/illustrations/i19.png' },
          { id: 3, title: '3D Animation', description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.', image: '../../assets/images/illustrations/i18.png' },
        ];
        // Replace with actual API call: const response = await $fetch('https://api.example.com/services');
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    },
    async fetchStrategy() {
      try {
        this.strategy = [
          { title: 'Collect Ideas', description: 'Nulla vitae elit libero pharetra augue dapibus.' },
          { title: 'Data Analysis', description: 'Vivamus sagittis lacus vel augue laoreet.' },
          { title: 'Finalize Product', description: 'Cras mattis consectetur purus sit amet.' },
        ];
      } catch (error) {
        console.error('Error fetching strategy:', error);
      }
    },
    async fetchWhyChooseUs() {
      try {
        this.whyChooseUs = [
          { title: 'Professional Design', description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.' },
          { title: 'Top-Notch Support', description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.' },
          { title: 'Header and Slider Options', description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.' },
        ];
      } catch (error) {
        console.error('Error fetching why choose us:', error);
      }
    },
    async fetchFacts() {
      try {
        this.facts = [
          { id: 1, title: 'Completed Projects', value: '1000+', icon: 'presentation-check' },
          { id: 2, title: 'Happy Customers', value: '50K+', icon: 'user-check' },
          { id: 3, title: 'Awards Won', value: '20+', icon: 'trophy' },
        ];
      } catch (error) {
        console.error('Error fetching facts:', error);
      }
    },
    async fetchTeam() {
      try {
        this.team = [
          { id: 1, name: 'Coriss Ambady', role: 'Financial Analyst', description: 'Fermentum massa justo sit amet risus morbi leo.', image: '/avatars/te1.jpg', socials: ['twitter', 'facebook-f', 'dribbble'] },
          { id: 2, name: 'Cory Zamora', role: 'Marketing Specialist', description: 'Fermentum massa justo sit amet risus morbi leo.', image: '/avatars/te2.jpg', socials: ['twitter', 'facebook-f', 'dribbble'] },
          { id: 3, name: 'Nikolas Brooten', role: 'Sales Manager', description: 'Fermentum massa justo sit amet risus morbi leo.', image: '/avatars/te3.jpg', socials: ['twitter', 'facebook-f', 'dribbble'] },
          { id: 4, name: 'Jackie Sanders', role: 'Investment Planner', description: 'Fermentum massa justo sit amet risus morbi leo.', image: '/avatars/te4.jpg', socials: ['twitter', 'facebook-f', 'dribbble'] },
        ];
      } catch (error) {
        console.error('Error fetching team:', error);
      }
    },
    async fetchProjects() {
      try {
        this.projects = [
          { id: 1, title: 'Cras Fermentum Sem', category: 'Mobile Design', image: '/photos/sp1.jpg', link: '/single-project' },
          { id: 2, title: 'Venenatis Euismod Vehicula', category: 'Web Design', image: '/photos/sp2.jpg', link: '/single-project' },
          { id: 3, title: 'Tortor Tellus Cursus', category: 'Stationary', image: '/photos/sp3.jpg', link: '/single-project' },
          { id: 4, title: 'Ridiculus Sem Parturient', category: 'Web Application', image: '/photos/sp4.jpg', link: '/single-project' },
          { id: 5, title: 'Cursus Sollicitudin Adipiscing', category: 'Web Design', image: '/photos/sp5.jpg', link: '/single-project' },
          { id: 6, title: 'Fringilla Quam Vulputate', category: 'Stationary', image: '/photos/sp6.jpg', link: '/single-project' },
        ];
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    },
    async fetchTestimonials() {
      try {
        this.testimonials = [
          { id: 1, text: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.', name: 'Coriss Ambady', role: 'Financial Analyst', avatar: '/avatars/te1.jpg' },
          { id: 2, text: 'Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet.', name: 'Cory Zamora', role: 'Marketing Specialist', avatar: '/avatars/te2.jpg' },
          { id: 3, text: 'Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet.', name: 'Nikolas Brooten', role: 'Sales Manager', avatar: '/avatars/te3.jpg' },
          { id: 4, text: 'Etiam adipiscing tincidunt elit convallis felis suscipit ut.', name: 'Coriss Ambady', role: 'Financial Analyst', avatar: '/avatars/te4.jpg' },
          { id: 5, text: 'Maecenas sed diam eget risus varius blandit sit amet non magna.', name: 'Jackie Sanders', role: 'Investment Planner', avatar: '/avatars/te5.jpg' },
          { id: 6, text: 'Donec id elit non mi porta gravida at eget metus.', name: 'Laura Widerski', role: 'Sales Specialist', avatar: '/avatars/te6.jpg' },
        ];
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    },
    async fetchFAQs() {
      try {
        this.faqs = [
          { question: 'How do I get my subscription receipt?', answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.' },
          { question: 'Are there any discounts for people in need?', answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.' },
          { question: 'Do you offer a free trial edit?', answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.' },
          { question: 'How do I reset my Account password?', answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.' },
        ];
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    },
  },
});