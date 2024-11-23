import CreateClinicService from "../services/CreateClinicService";
import FetchClinicsService from "../services/FetchClinicsService";

interface CreateClinicBody {
    name: string;
    specialty_id: string;
    address: object;
    phone: string;
}

class ClinicController {
    async create(req: any, res: any) {
        try {
            const {
                name,
                specialty_id,
                address,
                phone
            } = req.body as CreateClinicBody;
    
            const clinic = await CreateClinicService.execute({
                name,
                specialty_id,
                address,
                phone
            });
    
            return res.status(201).json(clinic);
        } catch(err) {
            return res.status(500).json({ error: err });
        }
    }

    async findAll(req: any, res: any) {
        
    }
}

export default new ClinicController();