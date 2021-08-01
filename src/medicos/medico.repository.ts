import { EntityRepository, Repository } from "typeorm";
import { Medicos } from "./medicos.entity";

@EntityRepository(Medicos)
export class MedicosRepository extends Repository<Medicos>{
}