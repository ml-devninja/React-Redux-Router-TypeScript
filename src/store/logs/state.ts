import logs from "../../mocks/access_log";

interface LogEntry {
  id: number;
  app_name: string;
  mac_address: string;
  ip_address: string;
  date: string;
}

export interface LogsStateDefinition {
  items: LogEntry[];
}

export const initialLogState: LogsStateDefinition = logs;
