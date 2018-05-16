using System;
using System.Collections.Generic;

namespace server.Models.Objects
{
    public class WhoisRecord : ICloneable
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="WhoisRecord"/> class.
        /// </summary>
        public WhoisRecord()
        {
            Nameservers = new List<string>();

            Admin = new Contact();
            Registrant = new Contact();
            Technical = new Contact();
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="WhoisRecord"/> class.
        /// </summary>
        /// <param name="text">The text.</param>
        public WhoisRecord(string text)
        {
            Nameservers = new List<string>();
            Admin = new Contact();
            Registrant = new Contact();
            Technical = new Contact();

            Raw = text;
        }

        /// <summary>
        /// Gets or sets the text.
        /// </summary>
        /// <value>The text.</value>
        public string Raw { get; set; }

        /// <summary>
        /// Gets or sets the domain.
        /// </summary>
        /// <value>The domain.</value>
        public string Domain { get; set; }

        /// <summary>
        /// Gets or sets the server.
        /// </summary>
        /// <value>The server.</value>
        public string Server { get; set; }

        /// <summary>
        /// Gets or sets the date the domain was created.
        /// </summary>
        /// <value>The created.</value>
        public DateTime? Created { get; set; }

        /// <summary>
        /// Gets or sets the date the domain will expire.
        /// </summary>
        /// <value>Expiration Date</value>
        public DateTime? Expired { get; set; }

        /// <summary>
        /// Gets or sets the registrant.
        /// </summary>
        /// <value>
        /// The registrant.
        /// </value>
        public Contact Registrant { get; set; }

        /// <summary>
        /// Gets or sets the technical contact.
        /// </summary>
        /// <value>
        /// The technical contact.
        /// </value>
        public Contact Technical { get; set; }

        /// <summary>
        /// Gets or sets the admin contact.
        /// </summary>
        /// <value>
        /// The admin contact.
        /// </value>
        public Contact Admin { get; set; }

        /// <summary>
        /// Gets or sets the Domain statuses.
        /// </summary>
        /// <value>
        /// The ICANN EPP statuses.
        /// </value>
        public IList<string> DomainStatus { get; set; }

        public IList<string> Nameservers { get; set; }

        /// <summary>
        /// Returns a <see cref="T:System.String"/> that represents the current <see cref="T:System.Object"/>.
        /// </summary>
        /// <returns>
        /// A <see cref="T:System.String"/> that represents the current <see cref="T:System.Object"/>.
        /// </returns>
        public override string ToString()
        {
            return Raw;
        }

        public object Clone()
        {
            var clone = new WhoisRecord(Raw);

            return clone;
        }
    }
}