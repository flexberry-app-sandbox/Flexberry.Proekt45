﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proekt_45
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// База данных.
    /// </summary>
    // *** Start programmer edit section *** (БазаДанных CustomAttributes)

    // *** End programmer edit section *** (БазаДанных CustomAttributes)
    [AutoAltered()]
    [Caption("База данных")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("БазаДанныхE", new string[] {
            "СправУч as \'Фио ученика\'",
            "СправУч.Фио as \'Фио ученика\'",
            "СправУч.КлассУч.Назв as \'Класс\'",
            "СправУч.СправРод.Фио as \'Фио родителя\'",
            "СправУч.Номер.Наименование as \'Номер карты\'"})]
    [MasterViewDefineAttribute("БазаДанныхE", "СправУч", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фио ученика")]
    public class БазаДанных : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private IIS.Proekt_45.СправУч fСправУч;
        
        private IIS.Proekt_45.КартДоступ fКартДоступ;
        
        // *** Start programmer edit section *** (БазаДанных CustomMembers)

        // *** End programmer edit section *** (БазаДанных CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (БазаДанных.Дата CustomAttributes)

        // *** End programmer edit section *** (БазаДанных.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (БазаДанных.Дата Get start)

                // *** End programmer edit section *** (БазаДанных.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (БазаДанных.Дата Get end)

                // *** End programmer edit section *** (БазаДанных.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БазаДанных.Дата Set start)

                // *** End programmer edit section *** (БазаДанных.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (БазаДанных.Дата Set end)

                // *** End programmer edit section *** (БазаДанных.Дата Set end)
            }
        }
        
        /// <summary>
        /// База данных.
        /// </summary>
        // *** Start programmer edit section *** (БазаДанных.СправУч CustomAttributes)

        // *** End programmer edit section *** (БазаДанных.СправУч CustomAttributes)
        [PropertyStorage(new string[] {
                "СправУч"})]
        [NotNull()]
        public virtual IIS.Proekt_45.СправУч СправУч
        {
            get
            {
                // *** Start programmer edit section *** (БазаДанных.СправУч Get start)

                // *** End programmer edit section *** (БазаДанных.СправУч Get start)
                IIS.Proekt_45.СправУч result = this.fСправУч;
                // *** Start programmer edit section *** (БазаДанных.СправУч Get end)

                // *** End programmer edit section *** (БазаДанных.СправУч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БазаДанных.СправУч Set start)

                // *** End programmer edit section *** (БазаДанных.СправУч Set start)
                this.fСправУч = value;
                // *** Start programmer edit section *** (БазаДанных.СправУч Set end)

                // *** End programmer edit section *** (БазаДанных.СправУч Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Proekt_45.КартДоступ.
        /// </summary>
        // *** Start programmer edit section *** (БазаДанных.КартДоступ CustomAttributes)

        // *** End programmer edit section *** (БазаДанных.КартДоступ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "КартДоступ"})]
        public virtual IIS.Proekt_45.КартДоступ КартДоступ
        {
            get
            {
                // *** Start programmer edit section *** (БазаДанных.КартДоступ Get start)

                // *** End programmer edit section *** (БазаДанных.КартДоступ Get start)
                IIS.Proekt_45.КартДоступ result = this.fКартДоступ;
                // *** Start programmer edit section *** (БазаДанных.КартДоступ Get end)

                // *** End programmer edit section *** (БазаДанных.КартДоступ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БазаДанных.КартДоступ Set start)

                // *** End programmer edit section *** (БазаДанных.КартДоступ Set start)
                this.fКартДоступ = value;
                // *** Start programmer edit section *** (БазаДанных.КартДоступ Set end)

                // *** End programmer edit section *** (БазаДанных.КартДоступ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "БазаДанныхE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БазаДанныхE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БазаДанныхE", typeof(IIS.Proekt_45.БазаДанных));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of БазаДанных.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfБазаДанных CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfБазаДанных CustomAttributes)
    public class DetailArrayOfБазаДанных : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Proekt_45.DetailArrayOfБазаДанных members)

        // *** End programmer edit section *** (IIS.Proekt_45.DetailArrayOfБазаДанных members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type БазаДанных by index.
        /// </summary>
        /// <summary>
        /// Adds object with type БазаДанных.
        /// </summary>
        public DetailArrayOfБазаДанных(IIS.Proekt_45.КартДоступ fКартДоступ) : 
                base(typeof(БазаДанных), ((ICSSoft.STORMNET.DataObject)(fКартДоступ)))
        {
        }
        
        public IIS.Proekt_45.БазаДанных this[int index]
        {
            get
            {
                return ((IIS.Proekt_45.БазаДанных)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Proekt_45.БазаДанных dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
