import { DriverRepositoryInterface } from "@/repositories/interfaces/driver-repository-interface";

class ListDriversUseCase {
  constructor(private driverRepository: DriverRepositoryInterface) {}

  async execute() {
    const driverList = await this.driverRepository.list();

    return driverList;
  }
}

export { ListDriversUseCase };
