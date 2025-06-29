import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Adjust path if needed

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    landArea: '',
    language: '',
    farmingType: '',
    state: '',
    district: '',
  };

  otp = '';
  otpSent = false;

  farmArea = {
    value: null,
    unit: ''
  };

  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  areaUnits = ['Acre', 'Guntha', 'Hectare', 'Square Feet', 'Square Meter', 'Bigha', 'Katha'];

  languages = [
    'Assamese',
    'Bengali',
    'Bodo',
    'Dogri',
    'Gujarati',
    'Hindi',
    'Kannada',
    'Kashmiri',
    'Konkani',
    'Maithili',
    'Malayalam',
    'Manipuri',
    'Marathi',
    'Nepali',
    'Odia',
    'Punjabi',
    'Sanskrit',
    'Santali',
    'Sindhi',
    'Tamil',
    'Telugu',
    'Urdu',
    'English'
  ];

  farmingTypes = [
    'Organic Farming (Natural methods, no chemicals)',
    'Conventional Farming (Uses fertilizers & pesticides)',
    'Hydroponic Farming (Growing plants in water, no soil)',
    'Apiculture (Beekeeping for honey production)',
    'Dairy Farming (Raising cows/buffaloes for milk)',
    'Poultry Farming (Raising chickens for meat/eggs)',
    'Fish Farming (Raising fish in ponds or tanks)',
    'Horticulture (Growing fruits, vegetables, flowers)',
    'Sericulture (Silk farming with silkworms)',
    'Agroforestry (Combining trees with farming crops)'
  ];


  states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar-Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];

  districts: string[] = [];

  districtMap: { [key: string]: string[] } = {
    Maharashtra: ['Ahmednagar',
      'Akola',
      'Amravati',
      'Aurangabad',
      'Beed',
      'Bhandara',
      'Buldhana',
      'Chandrapur',
      'Dhule',
      'Gadchiroli',
      'Gondia',
      'Hingoli',
      'Jalgaon',
      'Jalna',
      'Kolhapur',
      'Latur',
      'Mumbai City',
      'Mumbai Suburban',
      'Nagpur',
      'Nanded',
      'Nandurbar',
      'Nashik',
      'Osmanabad',
      'Palghar',
      'Parbhani',
      'Pune',
      'Raigad',
      'Ratnagiri',
      'Sangli',
      'Satara',
      'Sindhudurg',
      'Solapur',
      'Thane',
      'Wardha',
      'Washim',
      'Yavatmal'],

    Punjab: ['Amritsar',
      'Barnala',
      'Bathinda',
      'Faridkot',
      'Fatehgarh Sahib',
      'Fazilka',
      'Ferozepur',
      'Gurdaspur',
      'Hoshiarpur',
      'Jalandhar',
      'Kapurthala',
      'Ludhiana',
      'Malerkotla',
      'Mansa',
      'Moga',
      'Mohali (SAS Nagar)',
      'Muktsar',
      'Nawanshahr (Shaheed Bhagat Singh Nagar)',
      'Pathankot',
      'Patiala',
      'Rupnagar (Ropar)',
      'Sangrur',
      'Tarn Taran'],

    Gujarat: ['Ahmedabad',
      'Amreli',
      'Anand',
      'Aravalli',
      'Banaskantha',
      'Bharuch',
      'Bhavnagar',
      'Botad',
      'Chhota Udaipur',
      'Dahod',
      'Dang',
      'Devbhoomi Dwarka',
      'Gandhinagar',
      'Gir Somnath',
      'Jamnagar',
      'Junagadh',
      'Kheda',
      'Kutch',
      'Mahisagar',
      'Mehsana',
      'Morbi',
      'Narmada',
      'Navsari',
      'Panchmahal',
      'Patan',
      'Porbandar',
      'Rajkot',
      'Sabarkantha',
      'Surat',
      'Surendranagar',
      'Tapi',
      'Vadodara',
      'Valsad'],

    Bihar: [
      'Araria',
      'Arwal',
      'Aurangabad',
      'Banka',
      'Begusarai',
      'Bhagalpur',
      'Bhojpur',
      'Buxar',
      'Darbhanga',
      'East Champaran (Motihari)',
      'Gaya',
      'Gopalganj',
      'Jamui',
      'Jehanabad',
      'Kaimur (Bhabua)',
      'Katihar',
      'Khagaria',
      'Kishanganj',
      'Lakhisarai',
      'Madhepura',
      'Madhubani',
      'Munger',
      'Muzaffarpur',
      'Nalanda',
      'Nawada',
      'Patna',
      'Purnia',
      'Rohtas',
      'Saharsa',
      'Samastipur',
      'Saran (Chhapra)',
      'Sheikhpura',
      'Sheohar',
      'Sitamarhi',
      'Siwan',
      'Supaul',
      'Vaishali',
      'West Champaran (Bettiah)'
    ],

    MadhyaPradesh: [
      'Agar Malwa',
      'Alirajpur',
      'Anuppur',
      'Ashoknagar',
      'Balaghat',
      'Barwani',
      'Betul',
      'Bhind',
      'Bhopal',
      'Burhanpur',
      'Chhatarpur',
      'Chhindwara',
      'Damoh',
      'Datia',
      'Dewas',
      'Dhar',
      'Dindori',
      'Guna',
      'Gwalior',
      'Harda',
      'Hoshangabad',
      'Indore',
      'Jabalpur',
      'Jhabua',
      'Katni',
      'Khandwa (East Nimar)',
      'Khargone (West Nimar)',
      'Mandla',
      'Mandsaur',
      'Morena',
      'Narsinghpur',
      'Neemuch',
      'Niwari',
      'Panna',
      'Raisen',
      'Rajgarh',
      'Ratlam',
      'Rewa',
      'Sagar',
      'Satna',
      'Sehore',
      'Seoni',
      'Shahdol',
      'Shajapur',
      'Sheopur',
      'Shivpuri',
      'Sidhi',
      'Singrauli',
      'Tikamgarh',
      'Ujjain',
      'Umaria',
      'Vidisha',
      'Maihar',
      'Nagda',
      'Pipariya',
      'Sausar'
    ]
  };

  constructor(private authService: AuthService) { }

  loadDistricts(state: string) {
    this.districts = this.districtMap[state] || [];
  }

  sendOtp() {
    const formattedPhone = this.user.phoneNumber.startsWith('+91')
      ? this.user.phoneNumber
      : '+91' + this.user.phoneNumber;

    this.authService.sendOtp(formattedPhone).subscribe({
      next: (res) => {
        console.log('OTP sent:', res);
        alert('OTP sent successfully!');
        this.otpSent = true;
        this.user.phoneNumber = formattedPhone; // store with +91
      },
      error: (err) => {
        console.error('Error sending OTP:', err);
        alert('Failed to send OTP');
      }
    });
  }

  register() {
    const formattedPhone = this.user.phoneNumber.startsWith('+91')
      ? this.user.phoneNumber
      : '+91' + this.user.phoneNumber;

    const userWithOtp = {
      name: this.user.fullName,
      email: this.user.email,
      password: this.user.password,
      phone: formattedPhone,
      state: this.user.state,
      district: this.user.district,
      typeOfFarming: this.user.farmingType,
      landArea: `${this.farmArea.value} ${this.farmArea.unit}`,
      preferredLanguage: this.user.language,
      otp: this.otp
    };

    console.log('User data sent to backend:', userWithOtp);

    this.authService.register(userWithOtp).subscribe({
      next: (res) => {
        console.log('Registration successful:', res);
        alert('Registration successful!');
      },
      error: (error) => {
        console.error('Registration failed:', error);

        // Try to extract error message from different formats
        const errorMessage = typeof error.error === 'string'
          ? error.error
          : error.error?.message || JSON.stringify(error.error) || 'Unknown error occurred';

        alert('Error: ' + errorMessage);
      }

    });
  }
}
