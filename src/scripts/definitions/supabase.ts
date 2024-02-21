export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      capabilities: {
        Row: {
          description: string | null
          id: number | null
          supported: boolean | null
        }
        Insert: {
          description?: string | null
          id?: number | null
          supported?: boolean | null
        }
        Update: {
          description?: string | null
          id?: number | null
          supported?: boolean | null
        }
        Relationships: []
      }
      dataaircraft: {
        Row: {
          agility: number | null
          aircraftcockpitarmor: number | null
          aircraftenginearmor: number | null
          aircraftfuselagearmor: number | null
          autonomouscontrollevel: number | null
          category: number | null
          climbrate: number | null
          cockpitgen: number | null
          comments: string | null
          cost: number | null
          crew: number | null
          damagepoints: number | null
          deprecated: boolean | null
          ergonomics: number | null
          fueloffloadrate: number | null
          height: number | null
          hypothetical: boolean | null
          id: number
          length: number | null
          name: string | null
          oodadetectioncycle: number | null
          oodaevasivecycle: number | null
          oodatargetingcycle: number | null
          operatorcountry: number | null
          operatorservice: number | null
          physicalsizecode: number | null
          runwaylengthcode: number | null
          span: number | null
          totalendurance: number | null
          type: number | null
          visibility: string | null
          weightempty: number | null
          weightmax: number | null
          weightpayload: number | null
          yearcommissioned: number | null
          yeardecommissioned: number | null
        }
        Insert: {
          agility?: number | null
          aircraftcockpitarmor?: number | null
          aircraftenginearmor?: number | null
          aircraftfuselagearmor?: number | null
          autonomouscontrollevel?: number | null
          category?: number | null
          climbrate?: number | null
          cockpitgen?: number | null
          comments?: string | null
          cost?: number | null
          crew?: number | null
          damagepoints?: number | null
          deprecated?: boolean | null
          ergonomics?: number | null
          fueloffloadrate?: number | null
          height?: number | null
          hypothetical?: boolean | null
          id: number
          length?: number | null
          name?: string | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          operatorcountry?: number | null
          operatorservice?: number | null
          physicalsizecode?: number | null
          runwaylengthcode?: number | null
          span?: number | null
          totalendurance?: number | null
          type?: number | null
          visibility?: string | null
          weightempty?: number | null
          weightmax?: number | null
          weightpayload?: number | null
          yearcommissioned?: number | null
          yeardecommissioned?: number | null
        }
        Update: {
          agility?: number | null
          aircraftcockpitarmor?: number | null
          aircraftenginearmor?: number | null
          aircraftfuselagearmor?: number | null
          autonomouscontrollevel?: number | null
          category?: number | null
          climbrate?: number | null
          cockpitgen?: number | null
          comments?: string | null
          cost?: number | null
          crew?: number | null
          damagepoints?: number | null
          deprecated?: boolean | null
          ergonomics?: number | null
          fueloffloadrate?: number | null
          height?: number | null
          hypothetical?: boolean | null
          id?: number
          length?: number | null
          name?: string | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          operatorcountry?: number | null
          operatorservice?: number | null
          physicalsizecode?: number | null
          runwaylengthcode?: number | null
          span?: number | null
          totalendurance?: number | null
          type?: number | null
          visibility?: string | null
          weightempty?: number | null
          weightmax?: number | null
          weightpayload?: number | null
          yearcommissioned?: number | null
          yeardecommissioned?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "dataaircraft_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "enumaircraftcategory"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_dataaircraft_operatorcountry_fkey"
            columns: ["operatorcountry"]
            isOneToOne: false
            referencedRelation: "enumoperatorcountry"
            referencedColumns: ["id"]
          }
        ]
      }
      dataaircraftcodes: {
        Row: {
          codeid: number | null
          id: number | null
        }
        Insert: {
          codeid?: number | null
          id?: number | null
        }
        Update: {
          codeid?: number | null
          id?: number | null
        }
        Relationships: []
      }
      dataaircraftcomms: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          isrelay: boolean | null
          parentspecific: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Relationships: []
      }
      dataaircraftfacility: {
        Row: {
          capacity: number | null
          id: number | null
          physicalsize: number | null
          runwaylength: number | null
          type: number | null
        }
        Insert: {
          capacity?: number | null
          id?: number | null
          physicalsize?: number | null
          runwaylength?: number | null
          type?: number | null
        }
        Update: {
          capacity?: number | null
          id?: number | null
          physicalsize?: number | null
          runwaylength?: number | null
          type?: number | null
        }
        Relationships: []
      }
      dataaircraftfuel: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      dataaircraftloadouts: {
        Row: {
          componentid: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          id?: number | null
        }
        Relationships: []
      }
      dataaircraftmounts: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          pb1: boolean | null
          pb2: boolean | null
          pma1: boolean | null
          pma2: boolean | null
          pmf1: boolean | null
          pmf2: boolean | null
          ps1: boolean | null
          ps2: boolean | null
          sb1: boolean | null
          sb2: boolean | null
          sma1: boolean | null
          sma2: boolean | null
          smf1: boolean | null
          smf2: boolean | null
          ss1: boolean | null
          ss2: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb2?: boolean | null
          pma1?: boolean | null
          pma2?: boolean | null
          pmf1?: boolean | null
          pmf2?: boolean | null
          ps1?: boolean | null
          ps2?: boolean | null
          sb1?: boolean | null
          sb2?: boolean | null
          sma1?: boolean | null
          sma2?: boolean | null
          smf1?: boolean | null
          smf2?: boolean | null
          ss1?: boolean | null
          ss2?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb2?: boolean | null
          pma1?: boolean | null
          pma2?: boolean | null
          pmf1?: boolean | null
          pmf2?: boolean | null
          ps1?: boolean | null
          ps2?: boolean | null
          sb1?: boolean | null
          sb2?: boolean | null
          sma1?: boolean | null
          sma2?: boolean | null
          smf1?: boolean | null
          smf2?: boolean | null
          ss1?: boolean | null
          ss2?: boolean | null
        }
        Relationships: []
      }
      dataaircraftpropulsion: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      dataaircraftsensors: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          degoverride: number | null
          degoverridemax: number | null
          id: number | null
          mastheight: number | null
          pb1: boolean | null
          pb1max: boolean | null
          pb2: boolean | null
          pb2max: boolean | null
          pma1: boolean | null
          pma1max: boolean | null
          pma2: boolean | null
          pma2max: boolean | null
          pmf1: boolean | null
          pmf1max: boolean | null
          pmf2: boolean | null
          pmf2max: boolean | null
          ps1: boolean | null
          ps1max: boolean | null
          ps2: boolean | null
          ps2max: boolean | null
          sb1: boolean | null
          sb1max: boolean | null
          sb2: boolean | null
          sb2max: boolean | null
          sma1: boolean | null
          sma1max: boolean | null
          sma2: boolean | null
          sma2max: boolean | null
          smf1: boolean | null
          smf1max: boolean | null
          smf2: boolean | null
          smf2max: boolean | null
          ss1: boolean | null
          ss1max: boolean | null
          ss2: boolean | null
          ss2max: boolean | null
          verticaldegmax: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          degoverride?: number | null
          degoverridemax?: number | null
          id?: number | null
          mastheight?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
          verticaldegmax?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          degoverride?: number | null
          degoverridemax?: number | null
          id?: number | null
          mastheight?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
          verticaldegmax?: number | null
        }
        Relationships: []
      }
      dataaircraftsignatures: {
        Row: {
          front: number | null
          id: number | null
          rear: number | null
          side: number | null
          top: number | null
          type: number | null
        }
        Insert: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          top?: number | null
          type?: number | null
        }
        Update: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          top?: number | null
          type?: number | null
        }
        Relationships: []
      }
      datacomm: {
        Row: {
          channels: number | null
          comments: string | null
          deprecated: boolean | null
          hypothetical: boolean | null
          id: number | null
          isoptional: boolean | null
          name: string | null
          qualitygrade: number | null
          range: number | null
          refreshrate: number | null
          refreshrategrade: number | null
          type: number | null
          weaponlinkrequiressensor: boolean | null
        }
        Insert: {
          channels?: number | null
          comments?: string | null
          deprecated?: boolean | null
          hypothetical?: boolean | null
          id?: number | null
          isoptional?: boolean | null
          name?: string | null
          qualitygrade?: number | null
          range?: number | null
          refreshrate?: number | null
          refreshrategrade?: number | null
          type?: number | null
          weaponlinkrequiressensor?: boolean | null
        }
        Update: {
          channels?: number | null
          comments?: string | null
          deprecated?: boolean | null
          hypothetical?: boolean | null
          id?: number | null
          isoptional?: boolean | null
          name?: string | null
          qualitygrade?: number | null
          range?: number | null
          refreshrate?: number | null
          refreshrategrade?: number | null
          type?: number | null
          weaponlinkrequiressensor?: boolean | null
        }
        Relationships: []
      }
      datacommcapabilities: {
        Row: {
          codeid: number | null
          id: number | null
        }
        Insert: {
          codeid?: number | null
          id?: number | null
        }
        Update: {
          codeid?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datacommdirectors: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datacommtype: {
        Row: {
          comments: string | null
          id: number | null
          iswireless: boolean | null
          name: string | null
        }
        Insert: {
          comments?: string | null
          id?: number | null
          iswireless?: boolean | null
          name?: string | null
        }
        Update: {
          comments?: string | null
          id?: number | null
          iswireless?: boolean | null
          name?: string | null
        }
        Relationships: []
      }
      datacommtypecantalkto: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datacontainer: {
        Row: {
          comments: string | null
          container_paradropcapable: boolean | null
          cubiccapacity: number | null
          height: number | null
          id: number | null
          ishold: boolean | null
          length: number | null
          name: string | null
          payloadcapacity: number | null
          type: number | null
          weight: number | null
          width: number | null
        }
        Insert: {
          comments?: string | null
          container_paradropcapable?: boolean | null
          cubiccapacity?: number | null
          height?: number | null
          id?: number | null
          ishold?: boolean | null
          length?: number | null
          name?: string | null
          payloadcapacity?: number | null
          type?: number | null
          weight?: number | null
          width?: number | null
        }
        Update: {
          comments?: string | null
          container_paradropcapable?: boolean | null
          cubiccapacity?: number | null
          height?: number | null
          id?: number | null
          ishold?: boolean | null
          length?: number | null
          name?: string | null
          payloadcapacity?: number | null
          type?: number | null
          weight?: number | null
          width?: number | null
        }
        Relationships: []
      }
      datadockingfacility: {
        Row: {
          capacity: number | null
          id: number | null
          physicalsize: number | null
          type: number | null
        }
        Insert: {
          capacity?: number | null
          id?: number | null
          physicalsize?: number | null
          type?: number | null
        }
        Update: {
          capacity?: number | null
          id?: number | null
          physicalsize?: number | null
          type?: number | null
        }
        Relationships: []
      }
      datafacility: {
        Row: {
          area: number | null
          armorgeneral: number | null
          category: number | null
          comments: string | null
          cost: number | null
          crew: number | null
          csgen: number | null
          damagepoints: number | null
          deprecated: boolean | null
          ergonomics: number | null
          hypothetical: boolean | null
          id: number | null
          length: number | null
          mastheight: number | null
          missiledefense: number | null
          mountsareaimpoints: boolean | null
          name: string | null
          oodadetectioncycle: number | null
          oodaevasivecycle: number | null
          oodatargetingcycle: number | null
          operatorcountry: number | null
          operatorservice: number | null
          radius: number | null
          type: number | null
          width: number | null
          yearcommissioned: number | null
          yeardecommissioned: number | null
        }
        Insert: {
          area?: number | null
          armorgeneral?: number | null
          category?: number | null
          comments?: string | null
          cost?: number | null
          crew?: number | null
          csgen?: number | null
          damagepoints?: number | null
          deprecated?: boolean | null
          ergonomics?: number | null
          hypothetical?: boolean | null
          id?: number | null
          length?: number | null
          mastheight?: number | null
          missiledefense?: number | null
          mountsareaimpoints?: boolean | null
          name?: string | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          operatorcountry?: number | null
          operatorservice?: number | null
          radius?: number | null
          type?: number | null
          width?: number | null
          yearcommissioned?: number | null
          yeardecommissioned?: number | null
        }
        Update: {
          area?: number | null
          armorgeneral?: number | null
          category?: number | null
          comments?: string | null
          cost?: number | null
          crew?: number | null
          csgen?: number | null
          damagepoints?: number | null
          deprecated?: boolean | null
          ergonomics?: number | null
          hypothetical?: boolean | null
          id?: number | null
          length?: number | null
          mastheight?: number | null
          missiledefense?: number | null
          mountsareaimpoints?: boolean | null
          name?: string | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          operatorcountry?: number | null
          operatorservice?: number | null
          radius?: number | null
          type?: number | null
          width?: number | null
          yearcommissioned?: number | null
          yeardecommissioned?: number | null
        }
        Relationships: []
      }
      datafacilityaircraftfacilities: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datafacilitycomms: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          isrelay: boolean | null
          parentspecific: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Relationships: []
      }
      datafacilitydockingfacilities: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datafacilityfuel: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datafacilitymagazines: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datafacilitymounts: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          pb1: boolean | null
          pb2: boolean | null
          pma1: boolean | null
          pma2: boolean | null
          pmf1: boolean | null
          pmf2: boolean | null
          ps1: boolean | null
          ps2: boolean | null
          sb1: boolean | null
          sb2: boolean | null
          sma1: boolean | null
          sma2: boolean | null
          smf1: boolean | null
          smf2: boolean | null
          ss1: boolean | null
          ss2: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb2?: boolean | null
          pma1?: boolean | null
          pma2?: boolean | null
          pmf1?: boolean | null
          pmf2?: boolean | null
          ps1?: boolean | null
          ps2?: boolean | null
          sb1?: boolean | null
          sb2?: boolean | null
          sma1?: boolean | null
          sma2?: boolean | null
          smf1?: boolean | null
          smf2?: boolean | null
          ss1?: boolean | null
          ss2?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb2?: boolean | null
          pma1?: boolean | null
          pma2?: boolean | null
          pmf1?: boolean | null
          pmf2?: boolean | null
          ps1?: boolean | null
          ps2?: boolean | null
          sb1?: boolean | null
          sb2?: boolean | null
          sma1?: boolean | null
          sma2?: boolean | null
          smf1?: boolean | null
          smf2?: boolean | null
          ss1?: boolean | null
          ss2?: boolean | null
        }
        Relationships: []
      }
      datafacilitysensors: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          mastheight: number | null
          pb1: boolean | null
          pb1max: boolean | null
          pb2: boolean | null
          pb2max: boolean | null
          pma1: boolean | null
          pma1max: boolean | null
          pma2: boolean | null
          pma2max: boolean | null
          pmf1: boolean | null
          pmf1max: boolean | null
          pmf2: boolean | null
          pmf2max: boolean | null
          ps1: boolean | null
          ps1max: boolean | null
          ps2: boolean | null
          ps2max: boolean | null
          sb1: boolean | null
          sb1max: boolean | null
          sb2: boolean | null
          sb2max: boolean | null
          sma1: boolean | null
          sma1max: boolean | null
          sma2: boolean | null
          sma2max: boolean | null
          smf1: boolean | null
          smf1max: boolean | null
          smf2: boolean | null
          smf2max: boolean | null
          ss1: boolean | null
          ss1max: boolean | null
          ss2: boolean | null
          ss2max: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          mastheight?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          mastheight?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
        }
        Relationships: []
      }
      datafacilitysignatures: {
        Row: {
          front: number | null
          id: number | null
          rear: number | null
          side: number | null
          top: number | null
          type: number | null
        }
        Insert: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          top?: number | null
          type?: number | null
        }
        Update: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          top?: number | null
          type?: number | null
        }
        Relationships: []
      }
      datafuel: {
        Row: {
          capacity: number | null
          id: number | null
          type: number | null
        }
        Insert: {
          capacity?: number | null
          id?: number | null
          type?: number | null
        }
        Update: {
          capacity?: number | null
          id?: number | null
          type?: number | null
        }
        Relationships: []
      }
      datagroundunit: {
        Row: {
          area: number | null
          armorgeneral: number | null
          carry_cargo_area: number | null
          carry_cargo_crew: number | null
          carry_cargo_mass: number | null
          carry_cargo_type: number | null
          carry_cargo_volume: number | null
          category: number | null
          comments: string | null
          cost: number | null
          crew: number | null
          csgen: number | null
          damagepoints: number | null
          deprecated: boolean | null
          ergonomics: number | null
          hypothetical: boolean | null
          id: number | null
          length: number | null
          mass: number | null
          mastheight: number | null
          maxseastate: number | null
          missiledefense: number | null
          name: string | null
          oodadetectioncycle: number | null
          oodaevasivecycle: number | null
          oodatargetingcycle: number | null
          operatorcountry: number | null
          operatorservice: number | null
          self_cargo_area: number | null
          self_cargo_crew: number | null
          self_cargo_mass: number | null
          self_cargo_paradropcapable: boolean | null
          self_cargo_type: number | null
          self_cargo_volume: number | null
          setup: number | null
          tow_mass: number | null
          troopcapacity: number | null
          width: number | null
          yearcommissioned: number | null
          yeardecommissioned: number | null
        }
        Insert: {
          area?: number | null
          armorgeneral?: number | null
          carry_cargo_area?: number | null
          carry_cargo_crew?: number | null
          carry_cargo_mass?: number | null
          carry_cargo_type?: number | null
          carry_cargo_volume?: number | null
          category?: number | null
          comments?: string | null
          cost?: number | null
          crew?: number | null
          csgen?: number | null
          damagepoints?: number | null
          deprecated?: boolean | null
          ergonomics?: number | null
          hypothetical?: boolean | null
          id?: number | null
          length?: number | null
          mass?: number | null
          mastheight?: number | null
          maxseastate?: number | null
          missiledefense?: number | null
          name?: string | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          operatorcountry?: number | null
          operatorservice?: number | null
          self_cargo_area?: number | null
          self_cargo_crew?: number | null
          self_cargo_mass?: number | null
          self_cargo_paradropcapable?: boolean | null
          self_cargo_type?: number | null
          self_cargo_volume?: number | null
          setup?: number | null
          tow_mass?: number | null
          troopcapacity?: number | null
          width?: number | null
          yearcommissioned?: number | null
          yeardecommissioned?: number | null
        }
        Update: {
          area?: number | null
          armorgeneral?: number | null
          carry_cargo_area?: number | null
          carry_cargo_crew?: number | null
          carry_cargo_mass?: number | null
          carry_cargo_type?: number | null
          carry_cargo_volume?: number | null
          category?: number | null
          comments?: string | null
          cost?: number | null
          crew?: number | null
          csgen?: number | null
          damagepoints?: number | null
          deprecated?: boolean | null
          ergonomics?: number | null
          hypothetical?: boolean | null
          id?: number | null
          length?: number | null
          mass?: number | null
          mastheight?: number | null
          maxseastate?: number | null
          missiledefense?: number | null
          name?: string | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          operatorcountry?: number | null
          operatorservice?: number | null
          self_cargo_area?: number | null
          self_cargo_crew?: number | null
          self_cargo_mass?: number | null
          self_cargo_paradropcapable?: boolean | null
          self_cargo_type?: number | null
          self_cargo_volume?: number | null
          setup?: number | null
          tow_mass?: number | null
          troopcapacity?: number | null
          width?: number | null
          yearcommissioned?: number | null
          yeardecommissioned?: number | null
        }
        Relationships: []
      }
      datagroundunitaircraftfacilities: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datagroundunitcodes: {
        Row: {
          codeid: number | null
          id: number | null
        }
        Insert: {
          codeid?: number | null
          id?: number | null
        }
        Update: {
          codeid?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datagroundunitcomms: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          isrelay: boolean | null
          parentspecific: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Relationships: []
      }
      datagroundunitdockingfacilities: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datagroundunitfuel: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datagroundunitmagazines: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datagroundunitmounts: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          pb1: boolean | null
          pb2: boolean | null
          pma1: boolean | null
          pma2: boolean | null
          pmf1: boolean | null
          pmf2: boolean | null
          ps1: boolean | null
          ps2: boolean | null
          sb1: boolean | null
          sb2: boolean | null
          sma1: boolean | null
          sma2: boolean | null
          smf1: boolean | null
          smf2: boolean | null
          ss1: boolean | null
          ss2: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb2?: boolean | null
          pma1?: boolean | null
          pma2?: boolean | null
          pmf1?: boolean | null
          pmf2?: boolean | null
          ps1?: boolean | null
          ps2?: boolean | null
          sb1?: boolean | null
          sb2?: boolean | null
          sma1?: boolean | null
          sma2?: boolean | null
          smf1?: boolean | null
          smf2?: boolean | null
          ss1?: boolean | null
          ss2?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb2?: boolean | null
          pma1?: boolean | null
          pma2?: boolean | null
          pmf1?: boolean | null
          pmf2?: boolean | null
          ps1?: boolean | null
          ps2?: boolean | null
          sb1?: boolean | null
          sb2?: boolean | null
          sma1?: boolean | null
          sma2?: boolean | null
          smf1?: boolean | null
          smf2?: boolean | null
          ss1?: boolean | null
          ss2?: boolean | null
        }
        Relationships: []
      }
      datagroundunitpropulsion: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datagroundunitsensors: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          mastheight: number | null
          pb1: boolean | null
          pb1max: boolean | null
          pb2: boolean | null
          pb2max: boolean | null
          pma1: boolean | null
          pma1max: boolean | null
          pma2: boolean | null
          pma2max: boolean | null
          pmf1: boolean | null
          pmf1max: boolean | null
          pmf2: boolean | null
          pmf2max: boolean | null
          ps1: boolean | null
          ps1max: boolean | null
          ps2: boolean | null
          ps2max: boolean | null
          sb1: boolean | null
          sb1max: boolean | null
          sb2: boolean | null
          sb2max: boolean | null
          sma1: boolean | null
          sma1max: boolean | null
          sma2: boolean | null
          sma2max: boolean | null
          smf1: boolean | null
          smf1max: boolean | null
          smf2: boolean | null
          smf2max: boolean | null
          ss1: boolean | null
          ss1max: boolean | null
          ss2: boolean | null
          ss2max: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          mastheight?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          mastheight?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
        }
        Relationships: []
      }
      datagroundunitsignatures: {
        Row: {
          front: number | null
          id: number | null
          rear: number | null
          side: number | null
          top: number | null
          type: number | null
        }
        Insert: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          top?: number | null
          type?: number | null
        }
        Update: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          top?: number | null
          type?: number | null
        }
        Relationships: []
      }
      dataloadout: {
        Row: {
          capacity: number | null
          cargo_area: number | null
          cargo_crew: number | null
          cargo_mass: number | null
          cargo_paradropcapable: boolean | null
          cargo_type: number | null
          cargo_volume: number | null
          comments: string | null
          defaultcombatradius: number | null
          defaultmissionprofile: number | null
          defaulttimeonstation: number | null
          deprecated: boolean | null
          hypothetical: boolean | null
          id: number | null
          loadoutrole: number | null
          name: string | null
          payloadweightdragmodifier: number | null
          quickturnaround: boolean | null
          quickturnaround_additionaltimepenalty: number | null
          quickturnaround_airbornetime: number | null
          quickturnaround_maxsorties: number | null
          quickturnaround_readytime: number | null
          quickturnaround_timeofday: number | null
          readytime: number | null
          readytime_sustained: number | null
          requiresbuddyillumination: boolean | null
          rof: number | null
          timeofday: number | null
          weather: number | null
          winchestershotgun: number | null
        }
        Insert: {
          capacity?: number | null
          cargo_area?: number | null
          cargo_crew?: number | null
          cargo_mass?: number | null
          cargo_paradropcapable?: boolean | null
          cargo_type?: number | null
          cargo_volume?: number | null
          comments?: string | null
          defaultcombatradius?: number | null
          defaultmissionprofile?: number | null
          defaulttimeonstation?: number | null
          deprecated?: boolean | null
          hypothetical?: boolean | null
          id?: number | null
          loadoutrole?: number | null
          name?: string | null
          payloadweightdragmodifier?: number | null
          quickturnaround?: boolean | null
          quickturnaround_additionaltimepenalty?: number | null
          quickturnaround_airbornetime?: number | null
          quickturnaround_maxsorties?: number | null
          quickturnaround_readytime?: number | null
          quickturnaround_timeofday?: number | null
          readytime?: number | null
          readytime_sustained?: number | null
          requiresbuddyillumination?: boolean | null
          rof?: number | null
          timeofday?: number | null
          weather?: number | null
          winchestershotgun?: number | null
        }
        Update: {
          capacity?: number | null
          cargo_area?: number | null
          cargo_crew?: number | null
          cargo_mass?: number | null
          cargo_paradropcapable?: boolean | null
          cargo_type?: number | null
          cargo_volume?: number | null
          comments?: string | null
          defaultcombatradius?: number | null
          defaultmissionprofile?: number | null
          defaulttimeonstation?: number | null
          deprecated?: boolean | null
          hypothetical?: boolean | null
          id?: number | null
          loadoutrole?: number | null
          name?: string | null
          payloadweightdragmodifier?: number | null
          quickturnaround?: boolean | null
          quickturnaround_additionaltimepenalty?: number | null
          quickturnaround_airbornetime?: number | null
          quickturnaround_maxsorties?: number | null
          quickturnaround_readytime?: number | null
          quickturnaround_timeofday?: number | null
          readytime?: number | null
          readytime_sustained?: number | null
          requiresbuddyillumination?: boolean | null
          rof?: number | null
          timeofday?: number | null
          weather?: number | null
          winchestershotgun?: number | null
        }
        Relationships: []
      }
      dataloadoutweapons: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          internal: boolean | null
          optional: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          internal?: boolean | null
          optional?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          internal?: boolean | null
          optional?: boolean | null
        }
        Relationships: []
      }
      datamagazine: {
        Row: {
          armorgeneral: number | null
          aviationmagazine: boolean | null
          capacity: number | null
          comments: string | null
          deprecated: boolean | null
          hypothetical: boolean | null
          id: number | null
          name: string | null
          rof: number | null
        }
        Insert: {
          armorgeneral?: number | null
          aviationmagazine?: boolean | null
          capacity?: number | null
          comments?: string | null
          deprecated?: boolean | null
          hypothetical?: boolean | null
          id?: number | null
          name?: string | null
          rof?: number | null
        }
        Update: {
          armorgeneral?: number | null
          aviationmagazine?: boolean | null
          capacity?: number | null
          comments?: string | null
          deprecated?: boolean | null
          hypothetical?: boolean | null
          id?: number | null
          name?: string | null
          rof?: number | null
        }
        Relationships: []
      }
      datamagazineweapons: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datamount: {
        Row: {
          armorgeneral: number | null
          autonomous: boolean | null
          availability: number | null
          canhotreload: boolean | null
          capacity: number | null
          cargo_area: number | null
          cargo_crew: number | null
          cargo_mass: number | null
          cargo_paradropcapable: boolean | null
          cargo_type: number | null
          comments: string | null
          damagepoints: number | null
          deprecated: boolean | null
          hypothetical: boolean | null
          id: number | null
          localcontrol: boolean | null
          logistic: boolean | null
          magazinecapacity: number | null
          magazinerof: number | null
          mobileunitcategory: number | null
          name: string | null
          reservetarget: boolean | null
          rof: number | null
          trainable: boolean | null
        }
        Insert: {
          armorgeneral?: number | null
          autonomous?: boolean | null
          availability?: number | null
          canhotreload?: boolean | null
          capacity?: number | null
          cargo_area?: number | null
          cargo_crew?: number | null
          cargo_mass?: number | null
          cargo_paradropcapable?: boolean | null
          cargo_type?: number | null
          comments?: string | null
          damagepoints?: number | null
          deprecated?: boolean | null
          hypothetical?: boolean | null
          id?: number | null
          localcontrol?: boolean | null
          logistic?: boolean | null
          magazinecapacity?: number | null
          magazinerof?: number | null
          mobileunitcategory?: number | null
          name?: string | null
          reservetarget?: boolean | null
          rof?: number | null
          trainable?: boolean | null
        }
        Update: {
          armorgeneral?: number | null
          autonomous?: boolean | null
          availability?: number | null
          canhotreload?: boolean | null
          capacity?: number | null
          cargo_area?: number | null
          cargo_crew?: number | null
          cargo_mass?: number | null
          cargo_paradropcapable?: boolean | null
          cargo_type?: number | null
          comments?: string | null
          damagepoints?: number | null
          deprecated?: boolean | null
          hypothetical?: boolean | null
          id?: number | null
          localcontrol?: boolean | null
          logistic?: boolean | null
          magazinecapacity?: number | null
          magazinerof?: number | null
          mobileunitcategory?: number | null
          name?: string | null
          reservetarget?: boolean | null
          rof?: number | null
          trainable?: boolean | null
        }
        Relationships: []
      }
      datamountcomms: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          isrelay: boolean | null
          parentspecific: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Relationships: []
      }
      datamountdirectors: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datamountmagazineweapons: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datamountsensors: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datamountweapons: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datapropulsion: {
        Row: {
          combinedtype: number | null
          comments: string | null
          deprecated: boolean | null
          hypothetical: boolean | null
          id: number | null
          name: string | null
          numberofcompartments: number | null
          numberofengines: number | null
          numberofenginesprim: number | null
          numberofenginesscnd: number | null
          numberofshafts: number | null
          sfcafterburner: number | null
          sfcmilitary: number | null
          thrustperengineafterburner: number | null
          thrustperenginemilitary: number | null
          type: number | null
        }
        Insert: {
          combinedtype?: number | null
          comments?: string | null
          deprecated?: boolean | null
          hypothetical?: boolean | null
          id?: number | null
          name?: string | null
          numberofcompartments?: number | null
          numberofengines?: number | null
          numberofenginesprim?: number | null
          numberofenginesscnd?: number | null
          numberofshafts?: number | null
          sfcafterburner?: number | null
          sfcmilitary?: number | null
          thrustperengineafterburner?: number | null
          thrustperenginemilitary?: number | null
          type?: number | null
        }
        Update: {
          combinedtype?: number | null
          comments?: string | null
          deprecated?: boolean | null
          hypothetical?: boolean | null
          id?: number | null
          name?: string | null
          numberofcompartments?: number | null
          numberofengines?: number | null
          numberofenginesprim?: number | null
          numberofenginesscnd?: number | null
          numberofshafts?: number | null
          sfcafterburner?: number | null
          sfcmilitary?: number | null
          thrustperengineafterburner?: number | null
          thrustperenginemilitary?: number | null
          type?: number | null
        }
        Relationships: []
      }
      datapropulsionperformance: {
        Row: {
          altitudeband: number | null
          altitudemax: number | null
          altitudemin: number | null
          consumption: number | null
          id: number | null
          speed: number | null
          throttle: number | null
        }
        Insert: {
          altitudeband?: number | null
          altitudemax?: number | null
          altitudemin?: number | null
          consumption?: number | null
          id?: number | null
          speed?: number | null
          throttle?: number | null
        }
        Update: {
          altitudeband?: number | null
          altitudemax?: number | null
          altitudemin?: number | null
          consumption?: number | null
          id?: number | null
          speed?: number | null
          throttle?: number | null
        }
        Relationships: []
      }
      datasatellite: {
        Row: {
          armor: number | null
          category: number | null
          comments: string | null
          cost: number | null
          damagepoints: number | null
          deprecated: boolean | null
          height: number | null
          hypothetical: boolean | null
          id: number | null
          length: number | null
          name: string | null
          oodadetectioncycle: number | null
          oodaevasivecycle: number | null
          oodatargetingcycle: number | null
          operatorcountry: number | null
          operatorservice: number | null
          span: number | null
          type: number | null
          weightempty: number | null
          weightmax: number | null
          weightpayload: number | null
          yearcommissioned: number | null
          yeardecommissioned: number | null
        }
        Insert: {
          armor?: number | null
          category?: number | null
          comments?: string | null
          cost?: number | null
          damagepoints?: number | null
          deprecated?: boolean | null
          height?: number | null
          hypothetical?: boolean | null
          id?: number | null
          length?: number | null
          name?: string | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          operatorcountry?: number | null
          operatorservice?: number | null
          span?: number | null
          type?: number | null
          weightempty?: number | null
          weightmax?: number | null
          weightpayload?: number | null
          yearcommissioned?: number | null
          yeardecommissioned?: number | null
        }
        Update: {
          armor?: number | null
          category?: number | null
          comments?: string | null
          cost?: number | null
          damagepoints?: number | null
          deprecated?: boolean | null
          height?: number | null
          hypothetical?: boolean | null
          id?: number | null
          length?: number | null
          name?: string | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          operatorcountry?: number | null
          operatorservice?: number | null
          span?: number | null
          type?: number | null
          weightempty?: number | null
          weightmax?: number | null
          weightpayload?: number | null
          yearcommissioned?: number | null
          yeardecommissioned?: number | null
        }
        Relationships: []
      }
      datasatellitecodes: {
        Row: {
          codeid: number | null
          id: number | null
        }
        Insert: {
          codeid?: number | null
          id?: number | null
        }
        Update: {
          codeid?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datasatellitecomms: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          isrelay: boolean | null
          parentspecific: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Relationships: []
      }
      datasatellitemounts: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          pb1: boolean | null
          pb2: boolean | null
          pma1: boolean | null
          pma2: boolean | null
          pmf1: boolean | null
          pmf2: boolean | null
          ps1: boolean | null
          ps2: boolean | null
          sb1: boolean | null
          sb2: boolean | null
          sma1: boolean | null
          sma2: boolean | null
          smf1: boolean | null
          smf2: boolean | null
          ss1: boolean | null
          ss2: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb2?: boolean | null
          pma1?: boolean | null
          pma2?: boolean | null
          pmf1?: boolean | null
          pmf2?: boolean | null
          ps1?: boolean | null
          ps2?: boolean | null
          sb1?: boolean | null
          sb2?: boolean | null
          sma1?: boolean | null
          sma2?: boolean | null
          smf1?: boolean | null
          smf2?: boolean | null
          ss1?: boolean | null
          ss2?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb2?: boolean | null
          pma1?: boolean | null
          pma2?: boolean | null
          pmf1?: boolean | null
          pmf2?: boolean | null
          ps1?: boolean | null
          ps2?: boolean | null
          sb1?: boolean | null
          sb2?: boolean | null
          sma1?: boolean | null
          sma2?: boolean | null
          smf1?: boolean | null
          smf2?: boolean | null
          ss1?: boolean | null
          ss2?: boolean | null
        }
        Relationships: []
      }
      datasatelliteorbits: {
        Row: {
          apogee: number | null
          argumentofperigee: number | null
          bstar: number | null
          comments: string | null
          commissioningdate: string | null
          componentnumber: number | null
          decommissioningdate: string | null
          deorbitingdate: string | null
          eccentricity: number | null
          elementnumber: number | null
          epochday: number | null
          epochyear: number | null
          firsttimederivativeofthemeanmotiondividedbytwo: string | null
          id: number | null
          inclination: number | null
          internationaldesignator1: string | null
          internationaldesignator2: string | null
          internationaldesignator3: string | null
          launchdate: string | null
          meananomaly: number | null
          meanmotion: number | null
          missonid: string | null
          missonname: string | null
          operational: boolean | null
          orbitalperiod: number | null
          orbitnumber: number | null
          perigee: number | null
          plane: number | null
          revolutionnumberatepoch: number | null
          rightascensionoftheascendingnode: number | null
          satellitenumber: number | null
          secondtimederivativeofthemeanmotiondividedbysix: string | null
          tle: string | null
        }
        Insert: {
          apogee?: number | null
          argumentofperigee?: number | null
          bstar?: number | null
          comments?: string | null
          commissioningdate?: string | null
          componentnumber?: number | null
          decommissioningdate?: string | null
          deorbitingdate?: string | null
          eccentricity?: number | null
          elementnumber?: number | null
          epochday?: number | null
          epochyear?: number | null
          firsttimederivativeofthemeanmotiondividedbytwo?: string | null
          id?: number | null
          inclination?: number | null
          internationaldesignator1?: string | null
          internationaldesignator2?: string | null
          internationaldesignator3?: string | null
          launchdate?: string | null
          meananomaly?: number | null
          meanmotion?: number | null
          missonid?: string | null
          missonname?: string | null
          operational?: boolean | null
          orbitalperiod?: number | null
          orbitnumber?: number | null
          perigee?: number | null
          plane?: number | null
          revolutionnumberatepoch?: number | null
          rightascensionoftheascendingnode?: number | null
          satellitenumber?: number | null
          secondtimederivativeofthemeanmotiondividedbysix?: string | null
          tle?: string | null
        }
        Update: {
          apogee?: number | null
          argumentofperigee?: number | null
          bstar?: number | null
          comments?: string | null
          commissioningdate?: string | null
          componentnumber?: number | null
          decommissioningdate?: string | null
          deorbitingdate?: string | null
          eccentricity?: number | null
          elementnumber?: number | null
          epochday?: number | null
          epochyear?: number | null
          firsttimederivativeofthemeanmotiondividedbytwo?: string | null
          id?: number | null
          inclination?: number | null
          internationaldesignator1?: string | null
          internationaldesignator2?: string | null
          internationaldesignator3?: string | null
          launchdate?: string | null
          meananomaly?: number | null
          meanmotion?: number | null
          missonid?: string | null
          missonname?: string | null
          operational?: boolean | null
          orbitalperiod?: number | null
          orbitnumber?: number | null
          perigee?: number | null
          plane?: number | null
          revolutionnumberatepoch?: number | null
          rightascensionoftheascendingnode?: number | null
          satellitenumber?: number | null
          secondtimederivativeofthemeanmotiondividedbysix?: string | null
          tle?: string | null
        }
        Relationships: []
      }
      datasatellitesensors: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          pb1: boolean | null
          pb1max: boolean | null
          pb2: boolean | null
          pb2max: boolean | null
          pma1: boolean | null
          pma1max: boolean | null
          pma2: boolean | null
          pma2max: boolean | null
          pmf1: boolean | null
          pmf1max: boolean | null
          pmf2: boolean | null
          pmf2max: boolean | null
          ps1: boolean | null
          ps1max: boolean | null
          ps2: boolean | null
          ps2max: boolean | null
          sb1: boolean | null
          sb1max: boolean | null
          sb2: boolean | null
          sb2max: boolean | null
          sma1: boolean | null
          sma1max: boolean | null
          sma2: boolean | null
          sma2max: boolean | null
          smf1: boolean | null
          smf1max: boolean | null
          smf2: boolean | null
          smf2max: boolean | null
          ss1: boolean | null
          ss1max: boolean | null
          ss2: boolean | null
          ss2max: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
        }
        Relationships: []
      }
      datasatellitesignatures: {
        Row: {
          front: number | null
          id: number | null
          rear: number | null
          side: number | null
          top: number | null
          type: number | null
        }
        Insert: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          top?: number | null
          type?: number | null
        }
        Update: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          top?: number | null
          type?: number | null
        }
        Relationships: []
      }
      datasensor: {
        Row: {
          altitudemax: number | null
          altitudemax_asl: number | null
          altitudemin: number | null
          altitudemin_asl: number | null
          availability: number | null
          comments: string | null
          deprecated: boolean | null
          directionfindingaccuracy: number | null
          ecmbandwidth: number | null
          ecmgain: number | null
          ecmnumberoftargets: number | null
          ecmpeakpower: number | null
          ecmpokreduction: number | null
          esmnumberofchannels: number | null
          esmpreciseemitterid: boolean | null
          esmsensitivity: number | null
          esmsystemloss: number | null
          frequencylower: number | null
          frequencylowerilluminate: number | null
          frequencyupper: number | null
          frequencyupperilluminate: number | null
          generation: number | null
          hypothetical: boolean | null
          id: number | null
          irclassificationzoomlevel: number | null
          irdetectionzoomlevel: number | null
          masqueradeas: number | null
          maxcontactsair: number | null
          maxcontactsilluminate: number | null
          maxcontactssubmarine: number | null
          maxcontactssurface: number | null
          minesweepmaximumdepth: number | null
          minesweepmaximumspeed: number | null
          minesweepminimumdepth: number | null
          minesweepwidth: number | null
          minimumsignature_activesonar: number | null
          minimumsignature_esm: number | null
          minimumsignature_ir: number | null
          minimumsignature_passivesonar: number | null
          minimumsignature_radar: number | null
          minimumsignature_visual: number | null
          name: string | null
          radarblindtime: number | null
          radarblindtimeilluminate: number | null
          radarhorizontalbeamwidth: number | null
          radarhorizontalbeamwidthilluminate: number | null
          radarpeakpower: number | null
          radarpeakpowerilluminate: number | null
          radarprf: number | null
          radarprfilluminate: number | null
          radarprocessinggainloss: number | null
          radarprocessinggainlossilluminate: number | null
          radarpulsewidth: number | null
          radarpulsewidthilluminate: number | null
          radarsystemnoiselevel: number | null
          radarsystemnoiselevelilluminate: number | null
          radarverticalbeamwidth: number | null
          radarverticalbeamwidthilluminate: number | null
          rangemax: number | null
          rangemin: number | null
          resolutionangle: number | null
          resolutionheight: number | null
          resolutionrange: number | null
          role: number | null
          scaninterval: number | null
          sonarcznumber: number | null
          sonardirectivityindex: number | null
          sonarmaximumdeploymentdepth: number | null
          sonarminimumdeploymentdepth: number | null
          sonarpulselength: number | null
          sonarrecognitiondifferentialactive: number | null
          sonarrecognitiondifferentialpassive: number | null
          sonarsensortomachinerydistance: number | null
          sonarsourcelevel: number | null
          sonartowlength: number | null
          type: number | null
          visualclassificationzoomlevel: number | null
          visualdetectionzoomlevel: number | null
        }
        Insert: {
          altitudemax?: number | null
          altitudemax_asl?: number | null
          altitudemin?: number | null
          altitudemin_asl?: number | null
          availability?: number | null
          comments?: string | null
          deprecated?: boolean | null
          directionfindingaccuracy?: number | null
          ecmbandwidth?: number | null
          ecmgain?: number | null
          ecmnumberoftargets?: number | null
          ecmpeakpower?: number | null
          ecmpokreduction?: number | null
          esmnumberofchannels?: number | null
          esmpreciseemitterid?: boolean | null
          esmsensitivity?: number | null
          esmsystemloss?: number | null
          frequencylower?: number | null
          frequencylowerilluminate?: number | null
          frequencyupper?: number | null
          frequencyupperilluminate?: number | null
          generation?: number | null
          hypothetical?: boolean | null
          id?: number | null
          irclassificationzoomlevel?: number | null
          irdetectionzoomlevel?: number | null
          masqueradeas?: number | null
          maxcontactsair?: number | null
          maxcontactsilluminate?: number | null
          maxcontactssubmarine?: number | null
          maxcontactssurface?: number | null
          minesweepmaximumdepth?: number | null
          minesweepmaximumspeed?: number | null
          minesweepminimumdepth?: number | null
          minesweepwidth?: number | null
          minimumsignature_activesonar?: number | null
          minimumsignature_esm?: number | null
          minimumsignature_ir?: number | null
          minimumsignature_passivesonar?: number | null
          minimumsignature_radar?: number | null
          minimumsignature_visual?: number | null
          name?: string | null
          radarblindtime?: number | null
          radarblindtimeilluminate?: number | null
          radarhorizontalbeamwidth?: number | null
          radarhorizontalbeamwidthilluminate?: number | null
          radarpeakpower?: number | null
          radarpeakpowerilluminate?: number | null
          radarprf?: number | null
          radarprfilluminate?: number | null
          radarprocessinggainloss?: number | null
          radarprocessinggainlossilluminate?: number | null
          radarpulsewidth?: number | null
          radarpulsewidthilluminate?: number | null
          radarsystemnoiselevel?: number | null
          radarsystemnoiselevelilluminate?: number | null
          radarverticalbeamwidth?: number | null
          radarverticalbeamwidthilluminate?: number | null
          rangemax?: number | null
          rangemin?: number | null
          resolutionangle?: number | null
          resolutionheight?: number | null
          resolutionrange?: number | null
          role?: number | null
          scaninterval?: number | null
          sonarcznumber?: number | null
          sonardirectivityindex?: number | null
          sonarmaximumdeploymentdepth?: number | null
          sonarminimumdeploymentdepth?: number | null
          sonarpulselength?: number | null
          sonarrecognitiondifferentialactive?: number | null
          sonarrecognitiondifferentialpassive?: number | null
          sonarsensortomachinerydistance?: number | null
          sonarsourcelevel?: number | null
          sonartowlength?: number | null
          type?: number | null
          visualclassificationzoomlevel?: number | null
          visualdetectionzoomlevel?: number | null
        }
        Update: {
          altitudemax?: number | null
          altitudemax_asl?: number | null
          altitudemin?: number | null
          altitudemin_asl?: number | null
          availability?: number | null
          comments?: string | null
          deprecated?: boolean | null
          directionfindingaccuracy?: number | null
          ecmbandwidth?: number | null
          ecmgain?: number | null
          ecmnumberoftargets?: number | null
          ecmpeakpower?: number | null
          ecmpokreduction?: number | null
          esmnumberofchannels?: number | null
          esmpreciseemitterid?: boolean | null
          esmsensitivity?: number | null
          esmsystemloss?: number | null
          frequencylower?: number | null
          frequencylowerilluminate?: number | null
          frequencyupper?: number | null
          frequencyupperilluminate?: number | null
          generation?: number | null
          hypothetical?: boolean | null
          id?: number | null
          irclassificationzoomlevel?: number | null
          irdetectionzoomlevel?: number | null
          masqueradeas?: number | null
          maxcontactsair?: number | null
          maxcontactsilluminate?: number | null
          maxcontactssubmarine?: number | null
          maxcontactssurface?: number | null
          minesweepmaximumdepth?: number | null
          minesweepmaximumspeed?: number | null
          minesweepminimumdepth?: number | null
          minesweepwidth?: number | null
          minimumsignature_activesonar?: number | null
          minimumsignature_esm?: number | null
          minimumsignature_ir?: number | null
          minimumsignature_passivesonar?: number | null
          minimumsignature_radar?: number | null
          minimumsignature_visual?: number | null
          name?: string | null
          radarblindtime?: number | null
          radarblindtimeilluminate?: number | null
          radarhorizontalbeamwidth?: number | null
          radarhorizontalbeamwidthilluminate?: number | null
          radarpeakpower?: number | null
          radarpeakpowerilluminate?: number | null
          radarprf?: number | null
          radarprfilluminate?: number | null
          radarprocessinggainloss?: number | null
          radarprocessinggainlossilluminate?: number | null
          radarpulsewidth?: number | null
          radarpulsewidthilluminate?: number | null
          radarsystemnoiselevel?: number | null
          radarsystemnoiselevelilluminate?: number | null
          radarverticalbeamwidth?: number | null
          radarverticalbeamwidthilluminate?: number | null
          rangemax?: number | null
          rangemin?: number | null
          resolutionangle?: number | null
          resolutionheight?: number | null
          resolutionrange?: number | null
          role?: number | null
          scaninterval?: number | null
          sonarcznumber?: number | null
          sonardirectivityindex?: number | null
          sonarmaximumdeploymentdepth?: number | null
          sonarminimumdeploymentdepth?: number | null
          sonarpulselength?: number | null
          sonarrecognitiondifferentialactive?: number | null
          sonarrecognitiondifferentialpassive?: number | null
          sonarsensortomachinerydistance?: number | null
          sonarsourcelevel?: number | null
          sonartowlength?: number | null
          type?: number | null
          visualclassificationzoomlevel?: number | null
          visualdetectionzoomlevel?: number | null
        }
        Relationships: []
      }
      datasensorcapabilities: {
        Row: {
          codeid: number | null
          id: number | null
        }
        Insert: {
          codeid?: number | null
          id?: number | null
        }
        Update: {
          codeid?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datasensorcodes: {
        Row: {
          codeid: number | null
          id: number | null
        }
        Insert: {
          codeid?: number | null
          id?: number | null
        }
        Update: {
          codeid?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datasensorfrequencyilluminate: {
        Row: {
          frequency: number | null
          id: number | null
        }
        Insert: {
          frequency?: number | null
          id?: number | null
        }
        Update: {
          frequency?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datasensorfrequencysearchandtrack: {
        Row: {
          frequency: number | null
          id: number | null
        }
        Insert: {
          frequency?: number | null
          id?: number | null
        }
        Update: {
          frequency?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datasensorsensorgroups: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      dataship: {
        Row: {
          armorbelt: number | null
          armorbridge: number | null
          armorbulkheads: number | null
          armorcic: number | null
          armordeck: number | null
          armorengineering: number | null
          armorrudder: number | null
          beam: number | null
          cargo_area: number | null
          cargo_crew: number | null
          cargo_mass: number | null
          cargo_type: number | null
          cargo_volume: number | null
          cargocapacity: number | null
          category: number | null
          comments: string | null
          cost: number | null
          crew: number | null
          csgen: number | null
          damagepoints: number | null
          deprecated: boolean | null
          displacementempty: number | null
          displacementfull: number | null
          displacementstandard: number | null
          draft: number | null
          ergonomics: number | null
          focseastate: number | null
          height: number | null
          hypothetical: boolean | null
          id: number | null
          length: number | null
          maxseastate: number | null
          missiledefense: number | null
          name: string | null
          oodadetectioncycle: number | null
          oodaevasivecycle: number | null
          oodatargetingcycle: number | null
          operatorcountry: number | null
          operatorservice: number | null
          physicalsizecode: number | null
          repaircapacity: number | null
          troopcapacity: number | null
          type: number | null
          yearcommissioned: number | null
          yeardecommissioned: number | null
        }
        Insert: {
          armorbelt?: number | null
          armorbridge?: number | null
          armorbulkheads?: number | null
          armorcic?: number | null
          armordeck?: number | null
          armorengineering?: number | null
          armorrudder?: number | null
          beam?: number | null
          cargo_area?: number | null
          cargo_crew?: number | null
          cargo_mass?: number | null
          cargo_type?: number | null
          cargo_volume?: number | null
          cargocapacity?: number | null
          category?: number | null
          comments?: string | null
          cost?: number | null
          crew?: number | null
          csgen?: number | null
          damagepoints?: number | null
          deprecated?: boolean | null
          displacementempty?: number | null
          displacementfull?: number | null
          displacementstandard?: number | null
          draft?: number | null
          ergonomics?: number | null
          focseastate?: number | null
          height?: number | null
          hypothetical?: boolean | null
          id?: number | null
          length?: number | null
          maxseastate?: number | null
          missiledefense?: number | null
          name?: string | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          operatorcountry?: number | null
          operatorservice?: number | null
          physicalsizecode?: number | null
          repaircapacity?: number | null
          troopcapacity?: number | null
          type?: number | null
          yearcommissioned?: number | null
          yeardecommissioned?: number | null
        }
        Update: {
          armorbelt?: number | null
          armorbridge?: number | null
          armorbulkheads?: number | null
          armorcic?: number | null
          armordeck?: number | null
          armorengineering?: number | null
          armorrudder?: number | null
          beam?: number | null
          cargo_area?: number | null
          cargo_crew?: number | null
          cargo_mass?: number | null
          cargo_type?: number | null
          cargo_volume?: number | null
          cargocapacity?: number | null
          category?: number | null
          comments?: string | null
          cost?: number | null
          crew?: number | null
          csgen?: number | null
          damagepoints?: number | null
          deprecated?: boolean | null
          displacementempty?: number | null
          displacementfull?: number | null
          displacementstandard?: number | null
          draft?: number | null
          ergonomics?: number | null
          focseastate?: number | null
          height?: number | null
          hypothetical?: boolean | null
          id?: number | null
          length?: number | null
          maxseastate?: number | null
          missiledefense?: number | null
          name?: string | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          operatorcountry?: number | null
          operatorservice?: number | null
          physicalsizecode?: number | null
          repaircapacity?: number | null
          troopcapacity?: number | null
          type?: number | null
          yearcommissioned?: number | null
          yeardecommissioned?: number | null
        }
        Relationships: []
      }
      datashipaircraftfacilities: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datashipcodes: {
        Row: {
          codeid: number | null
          id: number | null
        }
        Insert: {
          codeid?: number | null
          id?: number | null
        }
        Update: {
          codeid?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datashipcomms: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          isrelay: boolean | null
          parentspecific: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Relationships: []
      }
      datashipdockingfacilities: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datashipfuel: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datashipmagazines: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datashipmounts: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          offset: number | null
          pb1: boolean | null
          pb2: boolean | null
          pma1: boolean | null
          pma2: boolean | null
          pmf1: boolean | null
          pmf2: boolean | null
          ps1: boolean | null
          ps2: boolean | null
          sb1: boolean | null
          sb2: boolean | null
          sma1: boolean | null
          sma2: boolean | null
          smf1: boolean | null
          smf2: boolean | null
          ss1: boolean | null
          ss2: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          offset?: number | null
          pb1?: boolean | null
          pb2?: boolean | null
          pma1?: boolean | null
          pma2?: boolean | null
          pmf1?: boolean | null
          pmf2?: boolean | null
          ps1?: boolean | null
          ps2?: boolean | null
          sb1?: boolean | null
          sb2?: boolean | null
          sma1?: boolean | null
          sma2?: boolean | null
          smf1?: boolean | null
          smf2?: boolean | null
          ss1?: boolean | null
          ss2?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          offset?: number | null
          pb1?: boolean | null
          pb2?: boolean | null
          pma1?: boolean | null
          pma2?: boolean | null
          pmf1?: boolean | null
          pmf2?: boolean | null
          ps1?: boolean | null
          ps2?: boolean | null
          sb1?: boolean | null
          sb2?: boolean | null
          sma1?: boolean | null
          sma2?: boolean | null
          smf1?: boolean | null
          smf2?: boolean | null
          ss1?: boolean | null
          ss2?: boolean | null
        }
        Relationships: []
      }
      datashippropulsion: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datashipsensors: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          degoverride: number | null
          degoverridemax: number | null
          id: number | null
          mastheight: number | null
          pb1: boolean | null
          pb1max: boolean | null
          pb2: boolean | null
          pb2max: boolean | null
          pma1: boolean | null
          pma1max: boolean | null
          pma2: boolean | null
          pma2max: boolean | null
          pmf1: boolean | null
          pmf1max: boolean | null
          pmf2: boolean | null
          pmf2max: boolean | null
          ps1: boolean | null
          ps1max: boolean | null
          ps2: boolean | null
          ps2max: boolean | null
          sb1: boolean | null
          sb1max: boolean | null
          sb2: boolean | null
          sb2max: boolean | null
          sma1: boolean | null
          sma1max: boolean | null
          sma2: boolean | null
          sma2max: boolean | null
          smf1: boolean | null
          smf1max: boolean | null
          smf2: boolean | null
          smf2max: boolean | null
          ss1: boolean | null
          ss1max: boolean | null
          ss2: boolean | null
          ss2max: boolean | null
          verticaldegmax: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          degoverride?: number | null
          degoverridemax?: number | null
          id?: number | null
          mastheight?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
          verticaldegmax?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          degoverride?: number | null
          degoverridemax?: number | null
          id?: number | null
          mastheight?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
          verticaldegmax?: number | null
        }
        Relationships: []
      }
      datashipsignatures: {
        Row: {
          front: number | null
          id: number | null
          rear: number | null
          side: number | null
          top: number | null
          type: number | null
        }
        Insert: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          top?: number | null
          type?: number | null
        }
        Update: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          top?: number | null
          type?: number | null
        }
        Relationships: []
      }
      datasubmarine: {
        Row: {
          beam: number | null
          cargo_volume: number | null
          category: number | null
          comments: string | null
          cost: number | null
          crew: number | null
          csgen: number | null
          damagepoints: number | null
          deprecated: boolean | null
          displacementempty: number | null
          displacementfull: number | null
          displacementstandard: number | null
          draft: number | null
          ergonomics: number | null
          height: number | null
          hypothetical: boolean | null
          id: number | null
          length: number | null
          maxdepth: number | null
          name: string | null
          oodadetectioncycle: number | null
          oodaevasivecycle: number | null
          oodatargetingcycle: number | null
          operatorcountry: number | null
          operatorservice: number | null
          physicalsizecode: number | null
          rovradius: number | null
          type: number | null
          yearcommissioned: number | null
          yeardecommissioned: number | null
        }
        Insert: {
          beam?: number | null
          cargo_volume?: number | null
          category?: number | null
          comments?: string | null
          cost?: number | null
          crew?: number | null
          csgen?: number | null
          damagepoints?: number | null
          deprecated?: boolean | null
          displacementempty?: number | null
          displacementfull?: number | null
          displacementstandard?: number | null
          draft?: number | null
          ergonomics?: number | null
          height?: number | null
          hypothetical?: boolean | null
          id?: number | null
          length?: number | null
          maxdepth?: number | null
          name?: string | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          operatorcountry?: number | null
          operatorservice?: number | null
          physicalsizecode?: number | null
          rovradius?: number | null
          type?: number | null
          yearcommissioned?: number | null
          yeardecommissioned?: number | null
        }
        Update: {
          beam?: number | null
          cargo_volume?: number | null
          category?: number | null
          comments?: string | null
          cost?: number | null
          crew?: number | null
          csgen?: number | null
          damagepoints?: number | null
          deprecated?: boolean | null
          displacementempty?: number | null
          displacementfull?: number | null
          displacementstandard?: number | null
          draft?: number | null
          ergonomics?: number | null
          height?: number | null
          hypothetical?: boolean | null
          id?: number | null
          length?: number | null
          maxdepth?: number | null
          name?: string | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          operatorcountry?: number | null
          operatorservice?: number | null
          physicalsizecode?: number | null
          rovradius?: number | null
          type?: number | null
          yearcommissioned?: number | null
          yeardecommissioned?: number | null
        }
        Relationships: []
      }
      datasubmarineaircraftfacilities: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datasubmarinecodes: {
        Row: {
          codeid: number | null
          id: number | null
        }
        Insert: {
          codeid?: number | null
          id?: number | null
        }
        Update: {
          codeid?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datasubmarinecomms: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          isrelay: boolean | null
          parentspecific: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Relationships: []
      }
      datasubmarinedockingfacilities: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datasubmarinefuel: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datasubmarinemagazines: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datasubmarinemounts: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          pb1: boolean | null
          pb2: boolean | null
          pma1: boolean | null
          pma2: boolean | null
          pmf1: boolean | null
          pmf2: boolean | null
          ps1: boolean | null
          ps2: boolean | null
          sb1: boolean | null
          sb2: boolean | null
          sma1: boolean | null
          sma2: boolean | null
          smf1: boolean | null
          smf2: boolean | null
          ss1: boolean | null
          ss2: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb2?: boolean | null
          pma1?: boolean | null
          pma2?: boolean | null
          pmf1?: boolean | null
          pmf2?: boolean | null
          ps1?: boolean | null
          ps2?: boolean | null
          sb1?: boolean | null
          sb2?: boolean | null
          sma1?: boolean | null
          sma2?: boolean | null
          smf1?: boolean | null
          smf2?: boolean | null
          ss1?: boolean | null
          ss2?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb2?: boolean | null
          pma1?: boolean | null
          pma2?: boolean | null
          pmf1?: boolean | null
          pmf2?: boolean | null
          ps1?: boolean | null
          ps2?: boolean | null
          sb1?: boolean | null
          sb2?: boolean | null
          sma1?: boolean | null
          sma2?: boolean | null
          smf1?: boolean | null
          smf2?: boolean | null
          ss1?: boolean | null
          ss2?: boolean | null
        }
        Relationships: []
      }
      datasubmarinepropulsion: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      datasubmarinesensors: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          pb1: boolean | null
          pb1max: boolean | null
          pb2: boolean | null
          pb2max: boolean | null
          pma1: boolean | null
          pma1max: boolean | null
          pma2: boolean | null
          pma2max: boolean | null
          pmf1: boolean | null
          pmf1max: boolean | null
          pmf2: boolean | null
          pmf2max: boolean | null
          ps1: boolean | null
          ps1max: boolean | null
          ps2: boolean | null
          ps2max: boolean | null
          sb1: boolean | null
          sb1max: boolean | null
          sb2: boolean | null
          sb2max: boolean | null
          sma1: boolean | null
          sma1max: boolean | null
          sma2: boolean | null
          sma2max: boolean | null
          smf1: boolean | null
          smf1max: boolean | null
          smf2: boolean | null
          smf2max: boolean | null
          ss1: boolean | null
          ss1max: boolean | null
          ss2: boolean | null
          ss2max: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
        }
        Relationships: []
      }
      datasubmarinesignatures: {
        Row: {
          front: number | null
          id: number | null
          rear: number | null
          side: number | null
          top: number | null
          type: number | null
        }
        Insert: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          top?: number | null
          type?: number | null
        }
        Update: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          top?: number | null
          type?: number | null
        }
        Relationships: []
      }
      datawarhead: {
        Row: {
          clusterbombdispersionarealength: number | null
          clusterbombdispersionareawidth: number | null
          comments: string | null
          damagepoints: number | null
          deprecated: boolean | null
          explosivestype: number | null
          explosivesweight: number | null
          hypothetical: boolean | null
          id: number | null
          name: string | null
          numberofwarheads: number | null
          projectilecaliber: number | null
          type: number | null
        }
        Insert: {
          clusterbombdispersionarealength?: number | null
          clusterbombdispersionareawidth?: number | null
          comments?: string | null
          damagepoints?: number | null
          deprecated?: boolean | null
          explosivestype?: number | null
          explosivesweight?: number | null
          hypothetical?: boolean | null
          id?: number | null
          name?: string | null
          numberofwarheads?: number | null
          projectilecaliber?: number | null
          type?: number | null
        }
        Update: {
          clusterbombdispersionarealength?: number | null
          clusterbombdispersionareawidth?: number | null
          comments?: string | null
          damagepoints?: number | null
          deprecated?: boolean | null
          explosivestype?: number | null
          explosivesweight?: number | null
          hypothetical?: boolean | null
          id?: number | null
          name?: string | null
          numberofwarheads?: number | null
          projectilecaliber?: number | null
          type?: number | null
        }
        Relationships: []
      }
      dataweapon: {
        Row: {
          airpok: number | null
          airrangemax: number | null
          airrangemin: number | null
          buddyilluminationforcec: boolean | null
          burnouttime: number | null
          burnoutweight: number | null
          canactassensor: boolean | null
          cargo_crew: number | null
          cargo_mass: number | null
          cargo_paradropcapable: boolean | null
          cargo_type: number | null
          cargo_volume: number | null
          cep: number | null
          cepsurface: number | null
          climbrate: number | null
          comments: string | null
          cost: number | null
          cruisealtitude: number | null
          cruisealtitude_asl: number | null
          deprecated: boolean | null
          detonationdelay: number | null
          diameter: number | null
          generation: number | null
          hypothetical: boolean | null
          id: number | null
          illuminationtime: number | null
          landpok: number | null
          landrangemax: number | null
          landrangemin: number | null
          launchaltitudemax: number | null
          launchaltitudemax_asl: number | null
          launchaltitudemin: number | null
          launchaltitudemin_asl: number | null
          launchspeedmax: number | null
          launchspeedmin: number | null
          length: number | null
          maxflighttime: number | null
          name: string | null
          snapupdownaltitude: number | null
          span: number | null
          subsurfacepok: number | null
          subsurfacerangemax: number | null
          subsurfacerangemin: number | null
          surfacepok: number | null
          surfacerangemax: number | null
          surfacerangemin: number | null
          targetaltitudemax: number | null
          targetaltitudemax_asl: number | null
          targetaltitudemin: number | null
          targetaltitudemin_asl: number | null
          targetspeedmax: number | null
          targetspeedmin: number | null
          torpedorangecruise: number | null
          torpedorangefull: number | null
          torpedospeedcruise: number | null
          torpedospeedfull: number | null
          type: number | null
          waypointnumber: number | null
          weight: number | null
        }
        Insert: {
          airpok?: number | null
          airrangemax?: number | null
          airrangemin?: number | null
          buddyilluminationforcec?: boolean | null
          burnouttime?: number | null
          burnoutweight?: number | null
          canactassensor?: boolean | null
          cargo_crew?: number | null
          cargo_mass?: number | null
          cargo_paradropcapable?: boolean | null
          cargo_type?: number | null
          cargo_volume?: number | null
          cep?: number | null
          cepsurface?: number | null
          climbrate?: number | null
          comments?: string | null
          cost?: number | null
          cruisealtitude?: number | null
          cruisealtitude_asl?: number | null
          deprecated?: boolean | null
          detonationdelay?: number | null
          diameter?: number | null
          generation?: number | null
          hypothetical?: boolean | null
          id?: number | null
          illuminationtime?: number | null
          landpok?: number | null
          landrangemax?: number | null
          landrangemin?: number | null
          launchaltitudemax?: number | null
          launchaltitudemax_asl?: number | null
          launchaltitudemin?: number | null
          launchaltitudemin_asl?: number | null
          launchspeedmax?: number | null
          launchspeedmin?: number | null
          length?: number | null
          maxflighttime?: number | null
          name?: string | null
          snapupdownaltitude?: number | null
          span?: number | null
          subsurfacepok?: number | null
          subsurfacerangemax?: number | null
          subsurfacerangemin?: number | null
          surfacepok?: number | null
          surfacerangemax?: number | null
          surfacerangemin?: number | null
          targetaltitudemax?: number | null
          targetaltitudemax_asl?: number | null
          targetaltitudemin?: number | null
          targetaltitudemin_asl?: number | null
          targetspeedmax?: number | null
          targetspeedmin?: number | null
          torpedorangecruise?: number | null
          torpedorangefull?: number | null
          torpedospeedcruise?: number | null
          torpedospeedfull?: number | null
          type?: number | null
          waypointnumber?: number | null
          weight?: number | null
        }
        Update: {
          airpok?: number | null
          airrangemax?: number | null
          airrangemin?: number | null
          buddyilluminationforcec?: boolean | null
          burnouttime?: number | null
          burnoutweight?: number | null
          canactassensor?: boolean | null
          cargo_crew?: number | null
          cargo_mass?: number | null
          cargo_paradropcapable?: boolean | null
          cargo_type?: number | null
          cargo_volume?: number | null
          cep?: number | null
          cepsurface?: number | null
          climbrate?: number | null
          comments?: string | null
          cost?: number | null
          cruisealtitude?: number | null
          cruisealtitude_asl?: number | null
          deprecated?: boolean | null
          detonationdelay?: number | null
          diameter?: number | null
          generation?: number | null
          hypothetical?: boolean | null
          id?: number | null
          illuminationtime?: number | null
          landpok?: number | null
          landrangemax?: number | null
          landrangemin?: number | null
          launchaltitudemax?: number | null
          launchaltitudemax_asl?: number | null
          launchaltitudemin?: number | null
          launchaltitudemin_asl?: number | null
          launchspeedmax?: number | null
          launchspeedmin?: number | null
          length?: number | null
          maxflighttime?: number | null
          name?: string | null
          snapupdownaltitude?: number | null
          span?: number | null
          subsurfacepok?: number | null
          subsurfacerangemax?: number | null
          subsurfacerangemin?: number | null
          surfacepok?: number | null
          surfacerangemax?: number | null
          surfacerangemin?: number | null
          targetaltitudemax?: number | null
          targetaltitudemax_asl?: number | null
          targetaltitudemin?: number | null
          targetaltitudemin_asl?: number | null
          targetspeedmax?: number | null
          targetspeedmin?: number | null
          torpedorangecruise?: number | null
          torpedorangefull?: number | null
          torpedospeedcruise?: number | null
          torpedospeedfull?: number | null
          type?: number | null
          waypointnumber?: number | null
          weight?: number | null
        }
        Relationships: []
      }
      dataweaponcodes: {
        Row: {
          codeid: number | null
          id: number | null
        }
        Insert: {
          codeid?: number | null
          id?: number | null
        }
        Update: {
          codeid?: number | null
          id?: number | null
        }
        Relationships: []
      }
      dataweaponcomms: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          isrelay: boolean | null
          parentspecific: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          isrelay?: boolean | null
          parentspecific?: boolean | null
        }
        Relationships: []
      }
      dataweapondirectors: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      dataweaponfuel: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      dataweaponpropulsion: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      dataweaponrecord: {
        Row: {
          componentid: number | null
          defaultload: number | null
          deprecated: boolean | null
          id: number | null
          maxload: number | null
          multiple: number | null
          rof: number | null
        }
        Insert: {
          componentid?: number | null
          defaultload?: number | null
          deprecated?: boolean | null
          id?: number | null
          maxload?: number | null
          multiple?: number | null
          rof?: number | null
        }
        Update: {
          componentid?: number | null
          defaultload?: number | null
          deprecated?: boolean | null
          id?: number | null
          maxload?: number | null
          multiple?: number | null
          rof?: number | null
        }
        Relationships: []
      }
      dataweaponsensors: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
          pb1: boolean | null
          pb1max: boolean | null
          pb2: boolean | null
          pb2max: boolean | null
          pma1: boolean | null
          pma1max: boolean | null
          pma2: boolean | null
          pma2max: boolean | null
          pmf1: boolean | null
          pmf1max: boolean | null
          pmf2: boolean | null
          pmf2max: boolean | null
          ps1: boolean | null
          ps1max: boolean | null
          ps2: boolean | null
          ps2max: boolean | null
          sb1: boolean | null
          sb1max: boolean | null
          sb2: boolean | null
          sb2max: boolean | null
          sma1: boolean | null
          sma1max: boolean | null
          sma2: boolean | null
          sma2max: boolean | null
          smf1: boolean | null
          smf1max: boolean | null
          smf2: boolean | null
          smf2max: boolean | null
          ss1: boolean | null
          ss1max: boolean | null
          ss2: boolean | null
          ss2max: boolean | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
          pb1?: boolean | null
          pb1max?: boolean | null
          pb2?: boolean | null
          pb2max?: boolean | null
          pma1?: boolean | null
          pma1max?: boolean | null
          pma2?: boolean | null
          pma2max?: boolean | null
          pmf1?: boolean | null
          pmf1max?: boolean | null
          pmf2?: boolean | null
          pmf2max?: boolean | null
          ps1?: boolean | null
          ps1max?: boolean | null
          ps2?: boolean | null
          ps2max?: boolean | null
          sb1?: boolean | null
          sb1max?: boolean | null
          sb2?: boolean | null
          sb2max?: boolean | null
          sma1?: boolean | null
          sma1max?: boolean | null
          sma2?: boolean | null
          sma2max?: boolean | null
          smf1?: boolean | null
          smf1max?: boolean | null
          smf2?: boolean | null
          smf2max?: boolean | null
          ss1?: boolean | null
          ss1max?: boolean | null
          ss2?: boolean | null
          ss2max?: boolean | null
        }
        Relationships: []
      }
      dataweaponsignatures: {
        Row: {
          front: number | null
          id: number | null
          rear: number | null
          side: number | null
          type: number | null
        }
        Insert: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          type?: number | null
        }
        Update: {
          front?: number | null
          id?: number | null
          rear?: number | null
          side?: number | null
          type?: number | null
        }
        Relationships: []
      }
      dataweapontargets: {
        Row: {
          codeid: number | null
          id: number | null
        }
        Insert: {
          codeid?: number | null
          id?: number | null
        }
        Update: {
          codeid?: number | null
          id?: number | null
        }
        Relationships: []
      }
      dataweaponwarheads: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      dataweaponweapons: {
        Row: {
          componentid: number | null
          componentnumber: number | null
          id: number | null
        }
        Insert: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Update: {
          componentid?: number | null
          componentnumber?: number | null
          id?: number | null
        }
        Relationships: []
      }
      dataweaponwra: {
        Row: {
          codeid: number | null
          id: number | null
          selfdefencerange: number | null
          shooterqty: number | null
          weaponqty: number | null
        }
        Insert: {
          codeid?: number | null
          id?: number | null
          selfdefencerange?: number | null
          shooterqty?: number | null
          weaponqty?: number | null
        }
        Update: {
          codeid?: number | null
          id?: number | null
          selfdefencerange?: number | null
          shooterqty?: number | null
          weaponqty?: number | null
        }
        Relationships: []
      }
      enumaircraftautonomouscontrollevel: {
        Row: {
          description: string | null
          id: number | null
          onsignalloss: string | null
        }
        Insert: {
          description?: string | null
          id?: number | null
          onsignalloss?: string | null
        }
        Update: {
          description?: string | null
          id?: number | null
          onsignalloss?: string | null
        }
        Relationships: []
      }
      enumaircraftcategory: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumaircraftcockpitgen: {
        Row: {
          description: string | null
          example: string | null
          id: number | null
          oodadetectioncycle: number | null
          oodaevasivecycle: number | null
          oodatargetingcycle: number | null
        }
        Insert: {
          description?: string | null
          example?: string | null
          id?: number | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
        }
        Update: {
          description?: string | null
          example?: string | null
          id?: number | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
        }
        Relationships: []
      }
      enumaircraftcockpitvisibility: {
        Row: {
          description: string | null
          id: string | null
        }
        Insert: {
          description?: string | null
          id?: string | null
        }
        Update: {
          description?: string | null
          id?: string | null
        }
        Relationships: []
      }
      enumaircraftcode: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumaircraftfacilitytype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumaircraftphysicalsize: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumaircrafttype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumarcs: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumarmortype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumcargotype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumcommcapability: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumcommlatency: {
        Row: {
          capability: string | null
          description: string | null
          example: string | null
          id: number | null
        }
        Insert: {
          capability?: string | null
          description?: string | null
          example?: string | null
          id?: number | null
        }
        Update: {
          capability?: string | null
          description?: string | null
          example?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumcommquality: {
        Row: {
          capability: string | null
          description: string | null
          example: string | null
          id: number | null
        }
        Insert: {
          capability?: string | null
          description?: string | null
          example?: string | null
          id?: number | null
        }
        Update: {
          capability?: string | null
          description?: string | null
          example?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumcommtype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumcontainertype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumdockingfacilityphysicalsize: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumdockingfacilitytype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumergonomics: {
        Row: {
          description: string | null
          id: number | null
          oodadetectionmodpercent: number | null
          oodaevasivemodpercent: number | null
          oodatargetingmodpercent: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
          oodadetectionmodpercent?: number | null
          oodaevasivemodpercent?: number | null
          oodatargetingmodpercent?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
          oodadetectionmodpercent?: number | null
          oodaevasivemodpercent?: number | null
          oodatargetingmodpercent?: number | null
        }
        Relationships: []
      }
      enumfacilitycategory: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumfacilitycsgen: {
        Row: {
          description: string | null
          example: string | null
          id: number | null
          oodadetectioncycle: number | null
          oodaevasivecycle: number | null
          oodatargetingcycle: number | null
        }
        Insert: {
          description?: string | null
          example?: string | null
          id?: number | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
        }
        Update: {
          description?: string | null
          example?: string | null
          id?: number | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
        }
        Relationships: []
      }
      enumfacilitytype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumfueltype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumgroundunitcategory: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumgroundunitcode: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumgroundunitcsgen: {
        Row: {
          description: string | null
          example: string | null
          id: number | null
          oodadetectioncycle: number | null
          oodaevasivecycle: number | null
          oodatargetingcycle: number | null
        }
        Insert: {
          description?: string | null
          example?: string | null
          id?: number | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
        }
        Update: {
          description?: string | null
          example?: string | null
          id?: number | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
        }
        Relationships: []
      }
      enumloadoutmissionprofile: {
        Row: {
          attackaltitudeegress: number | null
          attackaltitudeegressterrainfollowing: boolean | null
          attackaltitudeingress: number | null
          attackaltitudeingressterrainfollowing: boolean | null
          attackdistanceegress: number | null
          attackdistanceingress: number | null
          attackthrottlesetting: number | null
          combataltitude: number | null
          combatduration: number | null
          combatthrottlesetting: number | null
          cruisealtitudeegress: number | null
          cruisealtitudeegressterrainfollowing: boolean | null
          cruisealtitudeingress: number | null
          cruisealtitudeingressterrainfollowing: boolean | null
          cruiseatoptimumaltitude: boolean | null
          cruiseonewayonly: boolean | null
          cruisethrottlesettingegress: number | null
          cruisethrottlesettingingress: number | null
          description: string | null
          dropbombsatmaxrange: boolean | null
          formupaltitude: number | null
          formuptime: number | null
          id: number | null
          reserveloiteraltitude: number | null
          reserveloitertime: number | null
          reservepercentage: number | null
          stationaltitude: number | null
          stationaltitudeterrainfollowing: boolean | null
          stationthrottlesetting: number | null
        }
        Insert: {
          attackaltitudeegress?: number | null
          attackaltitudeegressterrainfollowing?: boolean | null
          attackaltitudeingress?: number | null
          attackaltitudeingressterrainfollowing?: boolean | null
          attackdistanceegress?: number | null
          attackdistanceingress?: number | null
          attackthrottlesetting?: number | null
          combataltitude?: number | null
          combatduration?: number | null
          combatthrottlesetting?: number | null
          cruisealtitudeegress?: number | null
          cruisealtitudeegressterrainfollowing?: boolean | null
          cruisealtitudeingress?: number | null
          cruisealtitudeingressterrainfollowing?: boolean | null
          cruiseatoptimumaltitude?: boolean | null
          cruiseonewayonly?: boolean | null
          cruisethrottlesettingegress?: number | null
          cruisethrottlesettingingress?: number | null
          description?: string | null
          dropbombsatmaxrange?: boolean | null
          formupaltitude?: number | null
          formuptime?: number | null
          id?: number | null
          reserveloiteraltitude?: number | null
          reserveloitertime?: number | null
          reservepercentage?: number | null
          stationaltitude?: number | null
          stationaltitudeterrainfollowing?: boolean | null
          stationthrottlesetting?: number | null
        }
        Update: {
          attackaltitudeegress?: number | null
          attackaltitudeegressterrainfollowing?: boolean | null
          attackaltitudeingress?: number | null
          attackaltitudeingressterrainfollowing?: boolean | null
          attackdistanceegress?: number | null
          attackdistanceingress?: number | null
          attackthrottlesetting?: number | null
          combataltitude?: number | null
          combatduration?: number | null
          combatthrottlesetting?: number | null
          cruisealtitudeegress?: number | null
          cruisealtitudeegressterrainfollowing?: boolean | null
          cruisealtitudeingress?: number | null
          cruisealtitudeingressterrainfollowing?: boolean | null
          cruiseatoptimumaltitude?: boolean | null
          cruiseonewayonly?: boolean | null
          cruisethrottlesettingegress?: number | null
          cruisethrottlesettingingress?: number | null
          description?: string | null
          dropbombsatmaxrange?: boolean | null
          formupaltitude?: number | null
          formuptime?: number | null
          id?: number | null
          reserveloiteraltitude?: number | null
          reserveloitertime?: number | null
          reservepercentage?: number | null
          stationaltitude?: number | null
          stationaltitudeterrainfollowing?: boolean | null
          stationthrottlesetting?: number | null
        }
        Relationships: []
      }
      enumloadoutrole: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumloadouttimeofday: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumloadoutweather: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumloadoutwinchestershotgun: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumoperatorcountry: {
        Row: {
          description: string | null
          id: number | null
          yearend: number | null
          yearstart: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
          yearend?: number | null
          yearstart?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
          yearend?: number | null
          yearstart?: number | null
        }
        Relationships: []
      }
      enumoperatorservice: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumpropulsioncombinedtype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumpropulsiontype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumrunwaylength: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsatellitecategory: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsatellitecode: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsatelliteorbitplane: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsatellitetype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsensorcapability: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsensorcode: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsensorfrequency: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsensorgeneration: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsensorrole: {
        Row: {
          comment: string | null
          description: string | null
          id: number | null
        }
        Insert: {
          comment?: string | null
          description?: string | null
          id?: number | null
        }
        Update: {
          comment?: string | null
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsensortype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumshipcategory: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumshipcode: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumshipcsgen: {
        Row: {
          architecture: string | null
          description: string | null
          example: string | null
          id: number | null
          oodadetectioncycle: number | null
          oodaevasivecycle: number | null
          oodatargetingcycle: number | null
          trackcap: number | null
          yearend: number | null
          yearstart: number | null
        }
        Insert: {
          architecture?: string | null
          description?: string | null
          example?: string | null
          id?: number | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          trackcap?: number | null
          yearend?: number | null
          yearstart?: number | null
        }
        Update: {
          architecture?: string | null
          description?: string | null
          example?: string | null
          id?: number | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          trackcap?: number | null
          yearend?: number | null
          yearstart?: number | null
        }
        Relationships: []
      }
      enumshipphysicalsize: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumshiptype: {
        Row: {
          description: string | null
          id: number | null
          yearend: number | null
          yearstart: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
          yearend?: number | null
          yearstart?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
          yearend?: number | null
          yearstart?: number | null
        }
        Relationships: []
      }
      enumsignaturetype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsubmarinecategory: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsubmarinecode: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsubmarinecsgen: {
        Row: {
          architecture: string | null
          description: string | null
          example: string | null
          id: number | null
          oodadetectioncycle: number | null
          oodaevasivecycle: number | null
          oodatargetingcycle: number | null
          yearend: number | null
          yearstart: number | null
        }
        Insert: {
          architecture?: string | null
          description?: string | null
          example?: string | null
          id?: number | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          yearend?: number | null
          yearstart?: number | null
        }
        Update: {
          architecture?: string | null
          description?: string | null
          example?: string | null
          id?: number | null
          oodadetectioncycle?: number | null
          oodaevasivecycle?: number | null
          oodatargetingcycle?: number | null
          yearend?: number | null
          yearstart?: number | null
        }
        Relationships: []
      }
      enumsubmarinephysicalsize: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumsubmarinetype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumwarheadcaliber: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumwarheadexplosivestype: {
        Row: {
          comment: string | null
          description: string | null
          id: number | null
          tntequivalent: number | null
        }
        Insert: {
          comment?: string | null
          description?: string | null
          id?: number | null
          tntequivalent?: number | null
        }
        Update: {
          comment?: string | null
          description?: string | null
          id?: number | null
          tntequivalent?: number | null
        }
        Relationships: []
      }
      enumwarheadtype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumweaponcode: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumweapongeneration: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumweaponimpacttype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumweaponprofileattack: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumweaponprofilecruise: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumweapontarget: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumweapontype: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumweaponwra: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumweaponwraselfdefencerange: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumweaponwrashooterqty: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      enumweaponwraweaponqty: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
      managementdatabase: {
        Row: {
          description: string | null
          id: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
