import { Request, Response } from "express";
import { CattleInterface } from "../interfaces/cattle.interface"; // Assuming this is the Cattle interface
import { AppDataSource } from "../db";
import { CattleData } from "../entity/CattleData";

const CattleRepository = AppDataSource.getRepository(CattleData);

class CattleController {
  public async createCattle(req: Request, res: Response) {
    try {
      const cattleData: CattleInterface = req.body;

      const uploadedImage = req.file;
      cattleData.filename = uploadedImage.filename; // Store the filename in the cattleData

      const cattle = new CattleData(cattleData);
      await CattleRepository.save(cattle);
      res.status(201).json(cattle);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }

  public async getAllCattle(req: Request, res: Response) {
    try {
      const allCattle = await CattleRepository.find();
      res.status(200).json(allCattle);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  public async getCattleById(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const cattle = await CattleRepository.findOneBy({ id });
      res.status(200).json(cattle);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  public async updateCattleById(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const cattle = await CattleRepository.findOneBy({ id });

      if (!cattle) {
        res.status(404).json({ message: "Cattle not found." });
        return;
      }

      const updates = req.body;
      for (const key in updates) {
        cattle[key] = updates[key];
      }

      await CattleRepository.save(cattle);
      res.status(200).json(cattle);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  public async deleteCattleById(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      const cattle = await CattleRepository.findOneBy({ id });

      if (!cattle) {
        res.status(404).json({ message: "Cattle not found." });
        return;
      }

      await CattleRepository.remove(cattle);
      res.status(204).send();
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default CattleController;
