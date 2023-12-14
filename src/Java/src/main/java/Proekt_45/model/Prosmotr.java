package Proekt_45.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt_45.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Просмотр
 */
@Entity(name = "IISProekt_45Просмотр")
@Table(schema = "public", name = "Просмотр")
public class Prosmotr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Время")
    private Date время;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravRod")
    @Convert("SpravRod")
    @Column(name = "СправРод", length = 16, unique = true, nullable = false)
    private UUID _spravrodid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravRod", insertable = false, updatable = false)
    private SpravRod spravrod;

    @OneToMany(mappedBy = "prosmotr", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Uchenik> ucheniks;


    public Prosmotr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getВремя() {
      return время;
    }

    public void setВремя(Date время) {
      this.время = время;
    }


}