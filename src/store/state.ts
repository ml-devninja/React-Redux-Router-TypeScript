import { UsersStateDefinition } from './users'
import { LogsStateDefinition } from './logs'
import { CarsStateDefinition } from './cars'

export interface RootState {
    users: UsersStateDefinition,
    logs: LogsStateDefinition,
    cars: CarsStateDefinition
}