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
    /// Справ долж.
    /// </summary>
    // *** Start programmer edit section *** (СправДолж CustomAttributes)

    // *** End programmer edit section *** (СправДолж CustomAttributes)
    [AutoAltered()]
    [Caption("Справочник должности")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СправДолжE", new string[] {
            "Должность as \'Должность\'"})]
    [View("СправДолжL", new string[] {
            "Должность as \'Должность\'"})]
    public class СправДолж : ICSSoft.STORMNET.DataObject
    {
        
        private string fДолжность;
        
        // *** Start programmer edit section *** (СправДолж CustomMembers)

        // *** End programmer edit section *** (СправДолж CustomMembers)

        
        /// <summary>
        /// Должность.
        /// </summary>
        // *** Start programmer edit section *** (СправДолж.Должность CustomAttributes)

        // *** End programmer edit section *** (СправДолж.Должность CustomAttributes)
        [StrLen(255)]
        public virtual string Должность
        {
            get
            {
                // *** Start programmer edit section *** (СправДолж.Должность Get start)

                // *** End programmer edit section *** (СправДолж.Должность Get start)
                string result = this.fДолжность;
                // *** Start programmer edit section *** (СправДолж.Должность Get end)

                // *** End programmer edit section *** (СправДолж.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СправДолж.Должность Set start)

                // *** End programmer edit section *** (СправДолж.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (СправДолж.Должность Set end)

                // *** End programmer edit section *** (СправДолж.Должность Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СправДолжE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СправДолжE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СправДолжE", typeof(IIS.Proekt_45.СправДолж));
                }
            }
            
            /// <summary>
            /// "СправДолжL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СправДолжL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СправДолжL", typeof(IIS.Proekt_45.СправДолж));
                }
            }
        }
    }
}
